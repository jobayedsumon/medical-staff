import Image from 'next/image';
import Link from 'next/link';
import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <Link className="home-link" href="/" title="Medical Staff" rel="home">
        <Image
          id="logo-img"
          height="160"
          width="180"
          className="img-fluid auto_size"
          src="/logo.jpg"
          alt="logo-img"
        />
      </Link>
    );
  }
}

export default Logo;
