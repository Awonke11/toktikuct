const useProfileImage = (fullname: string) : string => {
    const nameArray = fullname.split(" ");
    return nameArray[0].charAt(0) + nameArray[1].charAt(0);
}

export default useProfileImage;