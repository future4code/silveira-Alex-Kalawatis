export const goToHomePage = (navigate) => {
    navigate("/")
}
export const goToTripListPage = (navigate) =>{
    navigate("/trips/list")
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}
export const goToAppFormPage = (navigate) =>{
    navigate("/trips/appform")
}
export const goToAdminHomePage = (navigate) =>{
    navigate("/admin/trips/list")
}
export const goToCreateTripPage = (navigate) =>{
    navigate("/admin/trips/createtrip")
}
export const goToTripDetailsPage = (navigate, id) =>{
    navigate(`/adim/trips/details/${id}`)
}