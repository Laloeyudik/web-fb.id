


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import lock from '../images/iconLock.svg'

function Homes(e) {

  const [logoFacebook, setLogoFacebook] = useState('');
  const [logoProfile, setLogoProfile] = useState('');
  const [iconLocks, setIconLocks] = useState('');

  const navigate = useNavigate();

  useEffect(() => {



    axios.get('https://api-fbhomepage-id.onrender.com/public/images/imagem_fundo.svg')
      .then(img => setLogoProfile(img.data))
      .catch(err => { throw err });


    axios.get('https://api-fbhomepage-id.onrender.com/public/images/iconLock.svg')
      .then(img => setIconLocks(img.data))
      .catch(err => { throw err });


    axios.get('https://api-fbhomepage-id.onrender.com/public/images/fb.svg')
      .then(img => setLogoFacebook(img.data))
      .catch(err => { throw err });
  }, []);

  const handelRouter = () => {
    navigate('/login')
  }

  return (

    <div className="flex justify-center w-full ">
      <div className="w-full max-w-4xl md:w-full sm:w-full mt-2 mb-6 ">
        <div className="px-2 relative object-cover justify-center sm:px-2 ">
          <div className=" bg-white flex justify-start items-center ">
            <div className=' flex justify-start md:w-64 lg:w-72 w-32 h-auto object-cover overflow-hidden' style={{ maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: logoFacebook }} ></div>
          </div>
          <div className='flex justify-center items-center '>
            {/* <div className='w-auto h-32 sm:h-4 px-0 transform -translate-y-3 flex justify-center' dangerouslySetInnerHTML={{ __html: logoProfile }} ></div> */}
            <div className="w-32 mb-0 md:w-64 lg:w-73 justify-center h-auto flex text-center transform -translate-y-2 " style={{ maxWidth: '100%' }} dangerouslySetInnerHTML={{ __html: logoProfile }} />
          </div>
          <div className='flex justify-center items-center mt-8'>
            <div className="w-full  h-9 text-center text-sm text-neutral-800 lg:text-4xl md:text-2xl  md:mx-32 lg:mx-4   p-0  font-bold font-['Roboto'] lg:leading-10">Lamentablemente, su cuenta se desactivará temporalmente</div>
          </div>
          <div className='flex justify-center items-center mt-7 '>
            <div className="w-full lg:mt-6 h-7 text-center text-sm  text-neutral-800 lg:text-4xl md:text-2xl md:mx-32 lg:mx-4  p-0 font-normal font-['Roboto'] lg:leading-10">Hemos recibido varios informes sobre su cuenta. Esto significa que algo en su cuenta viola nuestras reglas.</div>
          </div>
          <div className='border-t border-gray-400 mt-16 mb-6 flex justify-center items-start md:mx-32 mx-2  lg:mx-4 lg:mt-32  gap-2 pt-6 lg:gap-4 lg:pt-6'>
            {/* <div className='w-auto h-14' dangerouslySetInnerHTML={{ __html: iconLocks }} /> */}
            <img className='w-auto h-8  md:h-12 lg:h-14 ' src={lock} />
            <p className='p-0 m-0 text-sm text-neutral-800 lg:text-4xl md:text-2xl  font-normal font-["Roboto"] lg:leading-10  '>
              <b>Su cuenta será deshabilitada dentro de las 24 horas.</b><br />
              La deshabilitaremos para proteger a los usuarios de Facebook si creemos que ha violado nuestras reglas. Por favor verifica tu cuenta de Facebook ahora.
            </p>

          </div>
          <div className='flex justify-center items-center'>
            <p className='w-full  mx-2  md:mx-32 text-neutral-800 lg:text-4xl md:text-2xl text-sm lg:mx-0 font-normal font-["Roboto"] lg:leading-7'>
              Le aconsejaremos que verifique los detalles de propiedad de su cuenta.
            </p>
          </div>
          <div className=' flex justify-center items-center mt-5 '>
            <button className=' px-6 py-2 md:px-8 md:py-3 lg:px-16 lg:py-4 bg-blue-500 hover:bg-blue-600 rounded-sm text-center text-white text-lg font-normal font-["Open Sans"] leading-normal ho' onClick={handelRouter}>Acceso</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Homes;

