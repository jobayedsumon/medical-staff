import FacebookIcon from '@/assets/icons/socials/facebook.svg';
import LinkedinIcon from '@/assets/icons/socials/linkedin.svg';
import InstagramIcon from '@/assets/icons/socials/instagram.svg';

interface SocialProps {
  url?: string;
}

export const Linkedin = ({
  url = 'https://www.linkedin.com/company/medical-staff/',
}: SocialProps) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      aria-label="linkedin"
      target="_blank"
    >
      <LinkedinIcon />
    </a>
  );
};

export const Facebook = ({
  url = 'https://www.facebook.com/medicalstaffagency',
}: {
  url?: string;
}) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      aria-label="facebook"
      target="_blank"
    >
      <FacebookIcon />
    </a>
  );
};

export const Instagram = ({
  url = 'https://www.instagram.com/medicalstaffagency/',
}: SocialProps) => {
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      aria-label="instagram"
      target="_blank"
    >
      <InstagramIcon />
    </a>
  );
};

export const SocialLinks = () => {
  return (
    <div className="socials d-flex gap-2 align-items-center">
      <Linkedin />
      <Facebook />
      <Instagram />
    </div>
  );
};
