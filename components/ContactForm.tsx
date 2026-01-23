import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function ContactForm({ className }: { className?: string }) {
    return (
        <div id="contact" className={cn('', className)}>
            <h1 className="scroll-m-20 text-center text-4xl font-bold text-balance">Contact Me</h1>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
                    <Input id="fieldgroup-name" placeholder="Zaiyan" />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                        id="fieldgroup-email"
                        type="email"
                        placeholder="name@example.com"
                    />
                </Field>

                <Field>
                    <FieldLabel htmlFor="fieldgroup-msg">Message</FieldLabel>
                    <Textarea placeholder="Type your message here." />
                </Field>

                <Field orientation="horizontal">
                    <Button className="cursor-pointer text-(--submit-btn)" type="reset" variant="outline">
                        Reset
                    </Button>
                    <Button className="cursor-pointer bg-(--gh-blue) hover:bg-(--gh-blue)/80 dark:text-(--submit-btn)" type="submit">Submit</Button>
                </Field>
            </FieldGroup>
        </div>
    )
}
