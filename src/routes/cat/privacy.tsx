import { createFileRoute } from '@tanstack/react-router';
import { BackButton } from '../../components/BackButton';

export const Route = createFileRoute('/cat/privacy')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="min-h-screen relative">
        <h2 className="font-dance text-5xl text-pink-500 text-shadow-lg text-shadow-pink-100 p-4 text-center">I AM THE PRIVACY CAT!</h2>
        <div className="w-full max-w-screen-md mx-auto"p>
          <BackButton />
          hi
        </div>
      </div>
    </div>
  );
}


