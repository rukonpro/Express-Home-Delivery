import React from 'react';

const AllOrderItem = (props) => {
    // const [isDisabled, setDisabled] = useState(false);
    const { title, img, email, name, date, _id, pending, colors } = props?.allOrderItem;

    const data = props.allOrderItem;

    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{date}</td>
            <td>
                <img className='h-10 w-10 rounded-full' src={img} alt="" /></td>
            <td >
                <div className='d-flex justify-around flex-wrap'>
                    <span onClick={() => props.handleApproved(data, _id)}

                        className={`px-2 my-1 py-0 mr-2 btn ${colors}  cursor-pointer inline-flex  leading-5 font-semibold  rounded-pill  text-white`}>
                        {pending}
                    </span>
                    <span onClick={() => props?.handleDelete(_id)} className="px-2 py-0 my-1 btn btn-danger  cursor-pointer inline-flex  leading-5 font-semibold rounded-pill  text-white">
                        Delete
                    </span>

                </div>
            </td>
        </tr>

    );
};

export default AllOrderItem;