import '@styles/globals.css'

import NavBar from '@components/NavBar'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: 'Discover & share AI Prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>
    
                <main className='app'>
                    <NavBar/>
                    {children}
                </main>
            </Provider>
        </body>

    </html>
  )
}

export default Rootlayout
