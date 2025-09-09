import { Spinner } from '@/components/ui/shadcn-io/spinner';
import { backendServices, frontendServices } from '@/lib/mocks';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('../components/home/about/about'));
const Specialties = lazy(() => import('../components/home/specialties'));
const Portifolio = lazy(() => import('../components/home/portifolio'));

export default function Home() {
    return (
        <main className="flex flex-col gap-6">
            <Suspense fallback={
                <div className="fixed inset-0 flex items-center justify-center">
                    <Spinner variant="infinite" size={32} />
                </div>
            }>

                <About />

                <Specialties backendSpecialties={backendServices} frontendSpecialties={frontendServices}  />

                <Portifolio />

            </Suspense>
        </main>
    );
}
