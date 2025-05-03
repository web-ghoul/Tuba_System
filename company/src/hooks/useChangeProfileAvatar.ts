
const useChangeProfileAvatar = () => {
  const handleChangeProfileAvatar = (avatar: File) => {
    console.log(avatar)
  };
  return {handleChangeProfileAvatar};
};

export default useChangeProfileAvatar;
