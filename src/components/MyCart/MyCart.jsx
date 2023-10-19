import { useLoaderData } from "react-router-dom";
// import Login from "../Login/Login";

const MyCart = () => {

    const cart = useLoaderData()
    console.log(cart);
    return (
        <div className="mt-32">
                 <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
       <tr >
            <th>1</th>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <button className="btn">X</button>
            </td>
          </tr>
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCart;