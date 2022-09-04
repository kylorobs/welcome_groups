const Socials = ({ data }) => (
    <div className="footer-social">
        {data.facebook_url && (
            <a
                href={data.facebook_url}
                target="_blank"
                aria-label="Facebook"
                tabIndex="0"
                role="button"
                aria-pressed="false"
                rel="noreferrer"
            >
                <i className="text-blue-600 fab fa-facebook-square" />
            </a>
        )}
        {data.instagram_url && (
            <a
                href={data.instagram_url}
                target="_blank"
                aria-label="Instagram"
                tabIndex="0"
                role="button"
                aria-pressed="false"
                rel="noreferrer"
            >
                <i className="text-red-500 fab fa-instagram" />
            </a>
        )}
        {data.twitter_url && (
            <a
                href={data.twitter_url}
                target="_blank"
                aria-label="Twitter"
                tabIndex="0"
                role="button"
                aria-pressed="false"
                rel="noreferrer"
            >
                <i className="text-blue-400 fab fa-twitter-square" />
            </a>
        )}
    </div>
);

export default Socials;
