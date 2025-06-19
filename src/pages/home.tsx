import Service from "./services";
import About from "./about";
import Skills from "./skills";
import Portifolio from "./portifolio";
// import ContactForm from "./contact-form";


export default function Home() {
    return (
        <main className="max-w-6xl mx-auto p-8 space-y-12">
            <About />
            <Service />
            <Skills />
            <Portifolio />
            {/* <ContactForm /> */}
        </main>
    );
}
