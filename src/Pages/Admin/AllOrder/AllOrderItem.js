import React from 'react';

const AllOrderItem = (props) => {
    // const [isDisabled, setDisabled] = useState(false);
    const { title, img, email, name, date, _id, pending } = props?.allOrderItem;






    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td><img className='h-10 w-10 rounded-full' src={img} alt="" /></td>
            <td>
                <span onClick={() => { }}

                    className="px-2 mr-2 btn btn-warning  cursor-pointer inline-flex py-1  leading-5 font-semibold  rounded-pill  text-white">
                    {pending}
                </span>
                <span onClick={() => props?.handleDelete(_id)} className="px-2 py-1 btn btn-danger  cursor-pointer inline-flex  leading-5 font-semibold rounded-pill  text-white">
                    Delete
                </span></td>
        </tr>

    );
};

export default AllOrderItem;