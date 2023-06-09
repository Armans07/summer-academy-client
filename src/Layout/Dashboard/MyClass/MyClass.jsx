import React from 'react';
import useSelected from '../../../hooks/useSelected';

const MyClass = () => {
    const [selected] = useSelected();
    const total = selected.reduce((sum, item) => item.price + sum, 0)

    return (
        <div>
            <div className='font-semibold flex justify-evenly mb-5'>
                <h2 className='text-2xl'>My Selected class: {selected.length}</h2>
                <h2 className='text-2xl'>Selected class Price: ${total}</h2>
                <button className='btn btn-xs'>PAY</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Remove</th>
                            <th>Enroll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selected.map((classes, index) => <tr
                                key={classes._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classes.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                  {classes.name}
                                </td>
                                <td>{classes.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Remove</button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">PAY</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClass;