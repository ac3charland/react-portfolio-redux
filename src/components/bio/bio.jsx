import React from 'react'
import './bio.scss'
import {HEADSHOT} from '../../utils/constants'

const cb = 'bio'

export default function Bio() {
    return (
        <div id='bio-section' className={cb}>
            <div className={`${cb}__content-wrapper`}>
                <h2 className={`${cb}__heading`}>About</h2>
                <div className={`${cb}__flex`}>
                    <div className={`${cb}__image-wrapper`}>
                        <img className={`${cb}__image`} src={HEADSHOT} alt='Headshot of Alex Charland, Frontend Web Developer' />
                    </div>
                    <div className={`${cb}__copy-wrapper`}>
                        <p>Direct trade hot chicken chillwave fixie, glossier put a bird on it stumptown humblebrag tote bag 90's palo santo. Beard literally locavore, tofu copper mug single-origin coffee slow-carb kogi butcher dreamcatcher fam irony knausgaard cardigan umami. Migas selfies succulents, kale chips affogato vegan small batch marfa iceland squid post-ironic sustainable subway tile readymade gluten-free. Leggings everyday carry next level plaid, flexitarian drinking vinegar VHS crucifix mixtape cornhole jianbing. Post-ironic franzen air plant ugh wayfarers. Next level taxidermy pork belly occupy cold-pressed cray.</p>
                        <p>Heirloom shoreditch 90's chicharrones semiotics 3 wolf moon butcher franzen glossier paleo thundercats coloring book fixie meggings chia. Glossier YOLO gluten-free, leggings pinterest try-hard la croix copper mug banh mi. Cray jean shorts readymade normcore heirloom woke narwhal, tumeric etsy lo-fi 3 wolf moon next level cronut yuccie tbh. Poke la croix woke heirloom vice, banjo taxidermy asymmetrical keytar flannel +1 bushwick hot chicken green juice activated charcoal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 