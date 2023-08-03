import "./App.css";
import useAuth from "./useAuth";

const UsersPage = () => {
  const dataState = [
    {
      userName: "test",
      email: " test@mail.com",
    },
    {
      userName: "test2",
      email: "test2@mail.com",
    },
  ];

  const { isLoggedIn } = useAuth(document.cookie);
  console.log("🚀 ~ isLoggedIn:", isLoggedIn);

  const displayUsers = () => {
    return (
      <>
        {dataState?.map((user: any) => {
          return (
            <div className="userswrapper">
              <div className="left">{`Username: ${user.userName}`}</div>
              <div className="right"> {`Emails: ${user.email}`}</div>
            </div>
          );
        })}
      </>
    );
  };

  return <div className="users">{displayUsers()}</div>;
};

export default UsersPage;
