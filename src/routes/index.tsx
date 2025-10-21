import { createFileRoute, Link } from '@tanstack/react-router';
import { Textbox } from '../components/Textbox';

export const Route = createFileRoute('/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="min-h-screen relative">
            <img className="absolute inset-0 w-full h-full object-cover -z-10 filter-blur" src="/cats/cat-galaxy.jpg" alt="background" />
            <div className="w-full px-4 py-2">
                <h1 className="font-dance text-5xl text-pink-500 text-shadow-lg text-shadow-pink-100">Catsplainer</h1>
                </div>
            <div className="space-y-4 pb-12 px-4 w-full max-w-screen-sm mx-auto">
                <div className="w-full flex justify-center gap-4">
                    {/* <Cat name="Whiskers" color="white" /> */}
                    <Textbox text="Ethereum cat" />
                    <Link to="/cat/ethereum">
                        <div className="h-48 w-48 flex justify-center items-center">
                            <img className="w-full h-full rounded-md object-cover" src="/cats/cat-in-bath.jpg" alt="cat" />
                        </div>
                    </Link>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <Link to="/cat/privacy">
                        <div className="h-48 w-48 flex justify-center items-center">
                            <img className="w-full h-full rounded-md object-cover" src="/cats/cat-upclose.jpg" alt="cat" />
                        </div>
                    </Link>
                    <Textbox text="Privacy cat" />
                    {/* <Cat name="Whiskers" color="white" /> */}
                </div>
                <div className="w-full flex justify-center gap-4">
                    {/* <Cat name="Whiskers" color="white" /> */}
                    <Textbox text="Steve" />
                    <Link to="/cat/steve">
                    <div className="h-48 w-48 flex justify-center items-center">
                        <img className="w-full h-full rounded-md object-cover" src="/cats/cat-loaf.jpg" alt="cat" />
                    </div>
                    </Link>
                </div>
                <div className="w-full flex justify-center gap-4">
                    <Link to="/cat/hackathon">
                    <div className="h-48 w-48 flex justify-center items-center">
                        <img className="w-full h-full rounded-md object-cover" src="/cats/cat-with-wine.jpg" alt="cat" />
                    </div>
                    </Link>
                    <Textbox text="Hackathon cat" />
                    {/* <Cat name="Whiskers" color="white" /> */}
                </div>
            </div>
        </div>
    );
}
