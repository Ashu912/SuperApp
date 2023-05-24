import { useState, useEffect } from 'react'
import Warning from '../../Assets/Warning.png'
import Action from '../../Assets/Action.png'
import Drama from '../../Assets/Drama.png'
import Romance from '../../Assets/Romance.png'
import Thriller from '../../Assets/Thriller.png'
import Western from '../../Assets/Western.png'
import Horror from '../../Assets/Horror.png'
import Fliction from '../../Assets/Fliction.png'
import Music from '../../Assets/Music.png'
import Fantasy from '../../Assets/Fantasy.png'
import '../../CSS/Category.css'
// import {v4} from 'uuid'
import { v4 as uuid } from 'uuid'
const Index = () => {

    const categories = [
        { name1: 'Action' },
        { name2: 'Drama' },
        { name3: 'Romance' },
        { name4: 'Fantasy' },
        { name5: 'Fliction' },
        { name6: 'Music' },
        { name7: 'Horror' },
        { name8: 'Thriller' },
        { name9: 'Western' }
    ];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        console.log(category);
    }



    // const handleCategoryChange = (category) => {
    //     const updatedCategories = [...selectedCategories,selectedCategories];
    //     const index = updatedCategories.indexOf(category);

    //     if (index > -1) {
    //         updatedCategories.splice(index, 1);
    //     } else {
    //         updatedCategories.push(category);
    //     }

    //     setSelectedCategories(updatedCategories);
    //     localStorage.setItem('selectedCategories', JSON.stringify(updatedCategories));
    //     document.getElementById('category').innerText = category;
    // };



    useEffect(() => {
        const storedCategories = localStorage.getItem('selectedCategories');

        if (storedCategories) {
            setSelectedCategories(JSON.parse(storedCategories));

        }
    }, []);

    return (
        <div className='app'>
            <div className='main'>
                <div>
                    <p className="Head" >Super app</p>
                    <p className='categorSelection'>Choose your<br></br>entertainment<br></br> category</p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='romance'>
                        {/* <p id='category'><span className='cross'>{selectedCategories}</span></p> */}

                    </div>
                    <div className='music'>

                        <p id='category1' ><span className='cross'>X</span></p>

                    </div>

                </div>
                <div className='Action'>
                    <p id='category2' > <span className='cross'>X</span></p>

                </div>
                <div style={{ display: 'flex', marginLeft: '133px', marginTop: '50px' }}>
                    <img style={{ marginTop: '20px' }} src={Warning} alt='Warning' height={"30px"} width={"40px"} />
                    <p style={{ color: 'red', fontSize: '25px', marginLeft: '30px', fontFamily: 'Roboto', letterSpacing: '0.02em' }}>Minimum 3 category required</p>
                </div>
            </div>

            <div style={{ width: '37%', height: '95%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '20%' }}>
                <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {categories.map((category) => (
                        <div className='ActionImage'>

                            <p key={category.name9} onClick={() => handleCategoryChange(category.name9)} >
                                {category.name9}
                            </p>

                            <img src={Action} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}

                    {categories.map((category) => (
                        <div className='DramaImage' onClick={() => handleCategoryChange(category.name1)}>
                            <p key={category.name1}  >
                                {category.name1}
                            </p>

                            <img src={Drama} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}

                    {categories.map((category) => (
                        <div className='RomanceImage' onClick={() => handleCategoryChange(category.name2)}>
                            <p key={category.name2}  >
                                {category.name2}
                            </p>

                            <img src={Romance} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}

                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    {categories.map((category) => (
                        <div className='ThrillerImage' onClick={() => handleCategoryChange(category.name3)} >
                            <p key={category.name3} >
                                {category.name3}
                            </p>

                            <img src={Thriller} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}
                    {categories.map((category) => (
                        <div className='WesternImage' onClick={() => handleCategoryChange(category.name4)}>
                            <p key={category.name4}  >
                                {category.name4}
                            </p>

                            <img src={Western} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}
                    {categories.map((category) => (
                      (category.name5) ? <div className='FlictionImage' onClick={() => handleCategoryChange(category.name6)}>
                      <p key={category.name5}  >
                          {category.name5}
                      </p>

                      <img src={Fliction} alt='Action' height={'170px'} width={'280px'} />
                  </div> : <p></p>
                    ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                    {categories.map((category) => (
                        (category.name6) ? <div className='FlictionImage' onClick={() => handleCategoryChange(category.name6)}>
                            <p key={category.name6}  >
                                {category.name6}
                            </p>

                            <img src={Fliction} alt='Action' height={'170px'} width={'280px'} />
                        </div> : <p></p>
                        
                    ))}

                    {categories.map((category) => (
                        <div className='FantasyImage' onClick={() => handleCategoryChange(category.name6)}>

                            <p key={category.name7}  >
                                {category.name7}
                            </p>

                            <img src={Fantasy} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}
                    {categories.map((category) => (
                        <div className='MusicImage' onClick={() => handleCategoryChange(category.name8)}>

                            <p key={category.name8}  >
                                {category.name8}
                            </p>

                            <img src={Music} alt='Action' height={'170px'} width={'280px'} />
                        </div>
                    ))}

                </div>

                <button className='btn1' >Next Page</button>

            </div>

        </div>
    )
}
export default Index