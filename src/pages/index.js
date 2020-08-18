import React from 'react'
import styled from 'styled-components'

import Layout from '@/components/Layout'
import SEO from '@/components/Seo'
import logo from '@/images/logo-llegar-mas-alto.svg'
import IconTW from '@/images/icon-twitter'
import IconFB from '@/images/icon-facebook'
import IconIG from '@/images/icon-instagram'

import 'animate.css'

const IconLink = styled.a`
  display: inline-block;
  padding: 0 0.2rem;
  svg {
    height: 0.6em;
    path {
      fill: white;
    }
  }
`

const Icons = styled.span`
  padding-left: 1rem;
  @media (max-width: 800px) {
    padding-left: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO />
    <div className="grid md:grid-cols-2 items-stretch min-h-screen">
      <div className="p-4 grid items-center">
        <div className="inner max-w-2xl mx-auto">
          <h1 className="leading-none text-center text-4xl sm:text-5xl mb-4">
            #JuntosMásAlto &nbsp;
            <Icons className="block sm:inline">
              <IconLink
                className="text-white"
                href="https://twitter.com/masaltonews"
                target="_blank"
                rel="noopener noreferrer">
                <IconTW alt="Síguenos en Twitter" />
              </IconLink>
              <IconLink
                href="https://www.facebook.com/LlegarMasAlto"
                target="_blank"
                rel="noopener noreferrer">
                <IconFB alt="Síguenos en Facebook" />
              </IconLink>
              <IconLink
                href="https://www.instagram.com/llegarmasalto"
                target="_blank"
                rel="noopener noreferrer">
                <IconIG alt="Síguenos en Instagram" />
              </IconLink>
            </Icons>
          </h1>
          <p>
            La actual pandemia es el mayor de los desafíos para el mundo. Crisis
            sanitaria que acrecienta las desigualdades de nuestro país, no somos
            ajenos al sufrimiento de un hermano, tendemos la mano y formamos la
            cadena.
          </p>
          <p>
            Estamos ayudando a familias donde el desempleo o la enfermedad les
            ha golpeado muy fuerte.
          </p>
          <p>
            A personas que no pueden cubrir sus necesidades básicas.
            Entregaremos <strong>Bonos de $30.000</strong> (treinta mil pesos
            mensuales).
          </p>
          <p>Haz tu aporte y más familias podrán recibir este bono.</p>
          <div className="grid lg:grid-cols-2 items-center gap-8 py-8">
            <a
              href="https://www.darcontarjeta.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=23007193"
              target="_blank"
              rel="noreferrer noopener"
              className="text-black inline p-4 rounded-full bg-white text-center animate__animated animate__bounce animate__delay-2s animate__repeat-3 hover:bg-naranjo hover:text-white transition ease-in-out duration-300">
              Donación Inmediata
            </a>
            <div>
              <p className="p-0 text-center">Transferencia Bancaria</p>
              <div className="bg-white rounded-xl px-8 py-4">
                <p className="text-black p-0">
                  Cuenta Corriente Banco Santander
                  <br />
                  Nombre: Fundación Llegar Más Alto
                  <br />
                  Rut: 65.106.124-5
                  <br />
                  Número de Cuenta 70454955
                  <br />
                  Email: yopuedo@llegarmasalto.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 grid items-center">
        <div className="header self-start"></div>
        <div className="inner max-w-lg mx-auto">
          <img src={logo} alt="Llegar más alto" className="w-128 max-w-full " />
        </div>
        <div className="footer self-end text-center">
          <p className="text-naranjo p-0">
            Llegar Más Alto: Organización sin fines de lucro. Berna #1714, Tel.:
            (2) 2623 7656 • Santiago Chile
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
