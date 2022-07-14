import React from 'react';
import styled from 'styled-components';
import { BiRestaurant } from 'react-icons/bi';
import { ImSearch, ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
import { TbStar } from 'react-icons/tb';
import Extendbar from './Extendbar';


function Sidebar() {

    return (
        <SidebarStyle>
            <div className='sidebar'>
                <div className='filterBox'>
                    <div className="searchBox">
                        <ImSearch 
                        className='icon' 
                        id='searchIcon'
                        />
                    </div>
                    <div className="restaurantBox">
                        <BiRestaurant 
                        className='icon' 
                        id='restaurantIcon'
                        />
                    </div>
                    <div className="landmarkBox">
                        <ImLibrary 
                        className='icon' 
                        id='landmarkIcon'
                        />
                    </div>
                    <div className="cafeBox">
                        <IoMdCafe 
                        className='icon' 
                        id='cafeIcon'
                        />
                    </div>
                    <div className="favoriteBox">
                        <TbStar 
                        className='icon' 
                        id='favoriteIcon'
                        />
                    </div>
                </div>
                <Extendbar/>
            </div>
        </SidebarStyle>
  );
}

const SidebarStyle = styled.div`

    left: 0;
    width: 70px;

    .sidebar {
        float: left;
        position: relative;
        background-color: #ffffff;
        font-size: 1.5rem;
        line-height: 48px;
        transition: 0.3s ease-in-out;
        height: calc(100vh - 60px);
        z-index: 5;
    }

    .filterBox {
        display: flex;
        flex-flow: column;
    }

    .icon {
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
    }
    
    .icon:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }

    .icon:active {
        filter: invert(80%);
    }

    #searchIcon {
        margin-top: 30px;
        background-color: #D9D9D9;
        color: white;
    }

    #restaurantIcon {
        background-color: #0029FE;
        color: white;
    }

    #landmarkIcon {
        background-color: #039B00;
        color: white;
    }

    #cafeIcon {
        background-color: #E05836;
        color: white;
    }

    #favoriteIcon {
        background-color: #FFB877;
        color: white;
    }
`


export default Sidebar;
