import { useState } from 'react';

interface CopyEmailProps {
  email?: string;
  className?: string;
}

export const CopyEmail = ({ email = "hello@boxbee.studio", className = "" }: CopyEmailProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy} 
      className={`cursor-pointer ${className}`}
      title="Click to copy email"
    >
      {copied ? "COPIED!" : email}
    </button>
  );
};
