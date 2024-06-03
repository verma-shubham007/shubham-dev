import React, {useEffect, useState} from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [submitEnabled, setSubmitEnabled] = useState(true);

    useEffect(() => {
        setSubmitEnabled(fullName && fullName.length > 0 && email && email.length > 0 && description && description.length > 0 );
    }, [fullName, email, description]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailData = {
            from_name: fullName,
            from_email: email,
            message: description
        }
        emailjs.send('service_y2cutre', 'template_d3uqwi8', emailData, 'WhISDjrsrmXTX3o_J')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Email sent successfully!');
                setFullName('');
                setEmail('');
                setDescription('');
            })
            .catch((err) => {
                console.error('Failed to send email. Error: ', err);
                alert('Failed to send email');
            });
    };

    return (
        <article className="contact active" data-page="contact">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            {/*<section className="mapbox">*/}
            {/*    <figure>*/}
            {/*        <iframe*/}
            {/*            src="https://www.google.com/"*/}
            {/*            width="400" height="300" loading="lazy"></iframe>*/}
            {/*    </figure>*/}
            {/*</section>*/}

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form">

                    <div className="input-wrapper">
                        <input type="text" name="fullname" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-input" placeholder="Full name" required />
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder="Email address" required />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                    <button className="form-btn" type="submit" disabled={!submitEnabled} onClick={(e) => handleSubmit(e)}>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </article>
    );
}

export default React.memo(Contact);
