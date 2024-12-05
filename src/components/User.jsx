import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/slices/userSlice";

function User() {
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>User Component</h2>
      <button onClick={() => dispatch(fetchUsers())}>Fetch User</button>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
export default User;
