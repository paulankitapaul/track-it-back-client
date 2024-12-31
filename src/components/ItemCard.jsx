import React from 'react';

const ItemCard = ({ item }) => {
    const { thumbnail, title, postType, description } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 hover:shadow-xl">
                <figure className='h-96'>
                    <img
                        className='h-full'
                        src={thumbnail}
                        alt={`image of ${title}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p><strong>Post Type : </strong>{postType}</p>
                    <p><strong>Description : </strong>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;