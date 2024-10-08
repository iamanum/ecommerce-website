import React from 'react';
import Image from 'next/image'; 
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface PropsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

const ProductCard: React.FC<PropsType> = ({
    img, 
    title, 
    desc, 
    rating, 
    price,
}) => {
    
    const generateRating = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <AiFillStar key={i} /> : <AiOutlineStar key={i} />);
        }
        return <div className='flex gap-1 text-[20px] text-yellow-500'>{stars}</div>; // Changed color to yellow
    };

    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px] shadow-md hover:shadow-lg transition-shadow'>
            <div>
                <Image 
                    className="w-full h-auto" 
                    src={img}  
                    width={200} 
                    height={300} 
                    alt={title} 
                />
            </div>

            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                <div>{generateRating(rating)}</div>
                <div className='font-bold flex gap-4'>
                    ${price}
                    <del className='text-gray-500 font-normal'>${parseInt(price) + 50}.00</del>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;