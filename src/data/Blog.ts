import blog1 from '../assets/homepage/png/blog1.png';
import blog2 from '../assets/homepage/png/blog2.png';
import blog3 from '../assets/homepage/png/blog3.png';
import blog4 from '../assets/homepage/png/blog4.png';

interface Blog {
    id: number;
    img: string;
    subTitle: string;
    title: string;
    text: string;
}

const blog: Blog[] = [
    {id: 1, img: blog1, subTitle: 'September 12', title: 'Cactus & Succulent Care Tips', text: 'Cacti are succulents are easy care plants for any home or patio.' },
    {id: 2, img: blog2, subTitle: 'September 13', title: 'Top 10 Succulents for Your Home', text: 'Best in hanging baskets. Prefers medium to high light.' },
    {id: 3, img: blog3, subTitle: 'September 15', title: 'Cacti & Succulent Care Tips', text: 'Cacti and succulents thrive in containers and because most are..' },
    {id: 4, img: blog4, subTitle: 'September 15', title: 'Best Houseplants Room by Room', text: 'The benefits of houseplants are endless. In addition to..' },
];

export default blog;