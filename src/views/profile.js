import { html } from '../../node_modules/lit-html/lit-html.js';

import { getMyMemes } from '../api/data.js';


const profileTemplate = (user, memes) => html`
        <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${user.gender}.png">
                <div class="user-content">
                    <p>Username: ${user.username}</p>
                    <p>Email: ${user.email}</p>
                    <p>My memes count: ${memes.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
                ${memes == 0 ? html`<p class="no-memes">No memes in database.</p>` : memes.map(memeTemp)}
            </div>
        </section>`;

const memeTemp = (meme) => html`<div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
    <a class="button" href="/details">Details</a>
</div>`;

export async function profilePage(ctx) {
    const memes = await getMyMemes(ctx.user._id);
    const user = ctx.user;
    ctx.render(profileTemplate(user, memes));
}