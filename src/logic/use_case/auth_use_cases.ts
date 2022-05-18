import {HotelRepository} from "../../data/hotel_db/repository/hotel_repository";
import {User} from "../entity/user_info";

let repo = new HotelRepository()

const MAX_ARG = 100000
const MAX_TOKEN = 100000000
let args = new Map<string, number>()
let tokens = new Map<string, number>()

function mixWithArg(s: string, arg: number): string{
    return s.concat(arg.toString())
}

function demixArgStr(s: string, arg: number): string {
    if (!s.endsWith(arg.toString())) return "-1"
    let lastIndex = s.lastIndexOf(arg.toString())
    return s.substring(0,lastIndex)
}

function demixArgNum(int: number, arg: number): number {
    return int^arg
}

function createToken(login: string, hash: string): string{
    let token = Math.floor(Math.random() * MAX_TOKEN + 1)
    tokens.set(login, token)
    return mixWithArg(hash, token)
}

export async function getArg(login: string): Promise<number>{
    let arg = Math.floor(Math.random() * MAX_ARG+1)
    args.set(login, arg)
    return arg
}

export async function logIn(login: string, passwordHash: string): Promise<string>{
    if (!await repo.loginExists(login)) return "-1"
    if (!args.has(login)) return "-2"
    let hash = await repo.getPasswordHash(login)
    if (mixWithArg(hash, args.get(login)) == passwordHash)
        return createToken(login, hash)
    else
        return "-3"
}

export async function register(user: User): Promise<string>{
    if (await repo.loginExists(user.credentials.login)) return "-1"
    if (!args.has(user.credentials.login)) return "-2"

    await repo.register(user)
    return createToken(user.credentials.login, demixArgStr(user.credentials.password, args.get(user.credentials.login)))
}

export async function checkToken(login: string, tokenWithArg: number): Promise<string>{
    if (!await repo.loginExists(login)) return "Wrong login"
    if (!args.has(login)) return "No arg registered"
    if (!tokens.has(login)) return "User didn't enter"
    let token = demixArgNum(tokenWithArg, args[login])
    if (token != tokens[login]) return "Wrong token"
    return ""
}