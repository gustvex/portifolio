import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulário enviado:", form);
        setSubmitted(true);
        setForm({ name: "", phone: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="max-w-4xl mx-auto p-8 space-y-6">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Entre em Contato</h2>
                <p className="text-muted-foreground">
                    Fico feliz em saber do seu interesse!
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Coluna 1 */}
                    <div className="space-y-4">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Seu nome"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="tel"
                            name="phone"
                            placeholder="Seu telefone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Coluna 2 */}
                    <div className="space-y-4">
                        <Textarea
                            name="message"
                            placeholder="Fale sobre seu interesse ou projeto..."
                            value={form.message}
                            onChange={handleChange}
                            rows={8}
                            required
                        />

                        <div className="flex justify-end">
                            <Button type="submit">
                                Enviar mensagem
                            </Button>
                        </div>
                        
                    </div>
                </div>


                {submitted && (
                    <p className="text-green-600 text-center mt-2">
                        Mensagem enviada com sucesso!
                    </p>
                )}
            </form>
        </section>
    );
}
