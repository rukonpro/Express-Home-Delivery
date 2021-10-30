
import React from 'react';

const MyOrder = (props) => {
    const { img, title, date, email, name, _id, pending, colors } = props?.myOrder;



    return (


        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td><img className='h-10 w-10 rounded-full' src={img} alt="" /></td>
            <td> <span onClick={() => props?.handleDelete(_id)} className="px-2  cursor-pointer inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500  text-white">
                Cancel
            </span> <span className={`px-2  cursor-pointer inline-flex text-xs leading-5 font-semibold rounded-full ${colors} text-white`}>{pending}</span>
            </td>
        </tr>



    );
};

export default MyOrder;