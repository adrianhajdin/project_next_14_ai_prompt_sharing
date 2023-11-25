import "@styles/globals.css";
import { Exo } from 'next/font/google'
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss';

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "POGGERS",
  description: "POGGING POG",
};

const RootLayout = ({children}: { children: React.ReactNode }) => (
  <html lang='en' className="dark">
    

    <body>

      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>

    </body>
  </html>
);

export default RootLayout;
