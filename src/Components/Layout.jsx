import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="dark:bg-gray-800">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    );
}
