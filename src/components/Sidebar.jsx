// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../Redux/login/loginSlice';
import {
    FaSignInAlt,
    FaTwitter,
    FaFacebook,
    FaGooglePlus,
    FaVimeo,
    FaPinterest,FaBars,FaTimes
  } from 'react-icons/fa';
  import { IconContext } from 'react-icons';
import '../styles/sidebar.css';

function Sidebar() {
    const dispatch = useDispatch();
    const [sidebar, setSidebar] = useState(false);
    const loginStatus = useSelector((state) => state.login.status);
    const sidebarData = [
        {
          id: 1,
          path: '/',
          title: 'cars',
          cName: 'nav-text',
        },
        {
          id: 2,
          path: '/reserve',
          title: 'Reserve',
          cName: 'nav-text',
        },
        {
          id: 3,
          path: '/reservations',
          title: 'My reservation',
          cName: 'nav-text',
        },
        {
          id: 4,
          path: '/add-car',
          title: 'add car',
          cName: 'nav-text',
        },
        {
            id: 5,
            path: '/delete-car',
            title: 'delete car',
            cName: 'nav-text',
          },
      ];

      const showSidebar = () => setSidebar(!sidebar);
      const [windowWidth, setWindowWidth] = useState(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const toggleSidebar = () => {
        setSidebar(!sidebar);
      };
      const closeSidebar = () => {
        setSidebar(false);
      };
      const handleLogout = () => {
        dispatch(logout());
      }
  return (
    <>
      { loginStatus && <>
        <IconContext.Provider value={{ color: '#97bf0f' }}>
      {windowWidth <= 768 && loginStatus ? (
            sidebar ? (
              <FaTimes className="close-bars cursor-pointer" onClick={closeSidebar} />
            ) : (
              <FaBars className="menu-bars cursor-pointer" onClick={toggleSidebar} />
            )
          ) : null}
          <nav
            className={`${
              sidebar && loginStatus ? 'nav-menu active' : 'nav-menu-hidden'
            }`}
          >
              <div
              className={`overlay ${sidebar && loginStatus ? 'active' : ''}`}
              onClick={closeSidebar}
            ></div>
            {loginStatus && <>
              <ul className='grid grid-rows-8 items-center' onClick={showSidebar}>
              <a href='/' className='row-span-2 flex justify-center mx-auto text-[#97bf0f] font-semibold'>
                Drive share
              </a>
              <ul className='row-span-4 flex flex-col gap-y-3'>
                {loginStatus === 'succeeded'
                  ? sidebarData.map((link) => (
                    <li key={link.id}>
                      <NavLink
                        onClick={showSidebar}
                        key={link.id}
                        to={link.path}
                        className={link.cName}
                      >
                        {link.icon}
                        {link.title}
                      </NavLink>
                    </li>
                  ))
                  : <span></span>
                }
              </ul>
              <div className='row-span-2 flex flex-col'>
                <div className='flex justify-center gap-x-2'>
                  <FaTwitter className='social-icons' />
                  <FaFacebook className='social-icons' />
                  <FaGooglePlus className='social-icons' />
                  <FaVimeo className='social-icons' />
                  <FaPinterest className='social-icons' />
                </div>
                <div className='flex justify-center'>
                  <button
                    type='button'
                    onClick={handleLogout}
                    className='mt-5'
                  >
                    <FaSignInAlt />
                  </button>
                </div>
              </div>
            </ul>
            </>}
          </nav>
      </IconContext.Provider>
      </>}
    </>
  );
}

export default Sidebar;
