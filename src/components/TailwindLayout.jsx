import { Outlet } from 'react-router-dom';
import TailwindSidebar from './TailwindSidebar';
import TailwindTopbar from './TailwindTopbar';

export default function TailwindLayout() {
    return (
        <div className="bg-essalud-light font-sans text-essalud-text flex h-screen w-full overflow-hidden">
            <TailwindSidebar />
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8FAFC]">
                <TailwindTopbar />
                <Outlet />
            </div>
        </div>
    );
}
