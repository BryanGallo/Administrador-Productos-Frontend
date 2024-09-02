import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <header className="bg-sky-800">
                <div className="mx-auto max-w-6xl py-10">
                    <h1 className="text-4xl font-extrabold text-white">
                        Administrador de Productos
                    </h1>
                </div>
            </header>
            <main className="mt-10 mx-auto max-w-6xl p-10 bg-white">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
