import { useEffect } from "react";

const SampleForEvents = () => {


    const handleClick = (event: any) => {
        const slideClickAttr = event.currentTarget.getAttribute('data-slide');
        const slideClickGroup = event.currentTarget.getAttribute('data-slide-group');

        const allContentsInGroup = document.querySelectorAll(`.content[data-slide-group='${slideClickGroup}']`);

        const slideContent = document.querySelector(`.content[data-slide='${slideClickAttr}']`);

        allContentsInGroup.forEach(content => {
            if (content !== slideContent) {
                content.classList.remove('active');
            }
        });
        
        if (slideContent) {
            slideContent.classList.toggle('active');
        }
    };

    useEffect(() => {
        const buttons = document.querySelectorAll('.button');

        buttons.forEach(button => {
            button.addEventListener('click', handleClick);
        });

        return () => {
            buttons.forEach(button => {
                button.removeEventListener('click', handleClick);
            });
        };
    }, []);

    return (
        <>
            <button data-slide="myclick1"  data-slide-group="group1" className="button">Click1</button>
            <div data-slide="myclick1" data-slide-group="group1" className="content">Click 1 Content</div>

            <button data-slide="myclick2" data-slide-group="group1" className="button">Click2</button>
            <div data-slide="myclick2" data-slide-group="group1" className="content">Click 2 Content</div>

            <button data-slide="myclick3" data-slide-group="group2"  className="button">Click3</button>
            <div data-slide="myclick3" data-slide-group="group2" className="content">Click 3 Content</div>
        </>
    );
};

export default SampleForEvents;