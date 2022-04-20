interface IAllRepository{
    getRentDocs(): Array<RentDoc>
    getRooms(): Array<Room>
    getCleaningSchedules(): Array<CleaningSchedule>
    getCredentials(): Array<Credentials>
    getUsers(): Array<User>
    getRoomCleanings(): Array<RoomCleaning>
    getDismissals(): Array<Dismissal>
    getRecruitments(): Array<Recruitment>
    getRoomsLoadDocs(): Array<RentDoc>
    getRentDocs(): Array<RentDoc>
}