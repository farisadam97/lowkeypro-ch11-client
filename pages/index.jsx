import React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar/Navbar.component';
import VideoPlayer from '../components/MediaVideo/Video.component';

export default function Home() {
  return (
    <>

      <Navbar />

      <div className={styles.sectionhome}>
        <Container maxWidth="xl">
          <Typography
            textAlign="center"
            color="white"
            variant="h1"
            paddingTop={{
              lg: 20,
              md: 20,
              sm: 20,
              xs: 10,
            }}
            fontSize={{
              lg: 70,
              md: 50,
              sm: 40,
              xs: 30,
            }}
          >
            LOWKEY GAME
          </Typography>
          <VideoPlayer src="https://media.w3.org/2010/05/sintel/trailer.mp4" />
          <Typography
            textAlign="center"
            color="white"
            variant="h4"
            paddingTop={{
              lg: 0,
              md: 0,
              sm: 2,
              xs: 2,
            }}
            fontSize={{
              lg: 30,
              md: 30,
              sm: 20,
              xs: 15,
            }}
          >
            Experience new traditional game play
          </Typography>
          <div className={styles.sectionhomebutton}>
            <Button variant="contained" style={{ padding: '20px 50px' }}>
              <Link href="/game-list">
                <a href="/game-list" style={{ textDecoration: 'none' }}>Play Now</a>
              </Link>
            </Button>
          </div>
        </Container>
      </div>
      <div className={styles.sectionhomearrow}>
        <Link href="/game-list">
          <a href="/game-list">
            <Typography
              color="white"
              variant="h6"
              fontSize={{
                lg: 15,
                md: 15,
                sm: 12,
                xs: 12,
              }}
            >
              THE STORY
            </Typography>
            <Image src="/images/scrolldown.svg" alt="Scroll Down" width={23} height={12} />
          </a>
        </Link>
      </div>
      <div className={styles.sectionfeature}>
        <Container maxWidth="xl">
          <div className={styles.mobilefull} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 20 }}>
            <div>
              <Image src="/images/650x700.png" alt="Feature" width={650} height={700} />
            </div>
            <div className={styles.mobilepaddingtop50}>
              <Typography
                color="white"
                variant="h6"
                fontSize={{
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 15,
                }}
              >
                Whats so special?
              </Typography>

              <Typography
                color="white"
                variant="h3"
                paddingTop={2}
                fontSize={{
                  lg: 50,
                  md: 40,
                  sm: 30,
                  xs: 20,
                }}
              >
                FEATURES
              </Typography>

              <Typography
                color="white"
                variant="h4"
                paddingTop={{
                  lg: 10,
                  md: 10,
                  sm: 2,
                  xs: 2,
                }}
                fontSize={{
                  lg: 40,
                  md: 30,
                  sm: 20,
                  xs: 15,
                }}
              >
                Lorem Ipsum
              </Typography>

              <Typography
                color="white"
                fontSize={{
                  lg: 24,
                  md: 20,
                  sm: 16,
                  xs: 12,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum imperdiet ligula, a fermentum eros elementum et.
              </Typography>

              <Typography
                color="white"
                variant="h4"
                paddingTop={{
                  lg: 10,
                  md: 10,
                  sm: 2,
                  xs: 2,
                }}
                fontSize={{
                  lg: 40,
                  md: 30,
                  sm: 20,
                  xs: 15,
                }}
              >
                Lorem Ipsum
              </Typography>

              <Typography
                color="white"
                fontSize={{
                  lg: 24,
                  md: 20,
                  sm: 16,
                  xs: 12,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum imperdiet ligula, a fermentum eros elementum et.
              </Typography>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.sectionsystemrequirement}>
        <Container maxWidth="xl">
          <div className={styles.mobilefull} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 20 }}>
            <div>
              <Typography
                color="white"
                variant="h3"
                fontSize={{
                  lg: 50,
                  md: 40,
                  sm: 30,
                  xs: 20,
                }}
              >
                SYSTEM
                {' '}
                <br />
                REQUIREMENTS
              </Typography>
              <br />
              <Image src="/images/650x700.png" alt="System Requirement" width={650} height={700} />
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.sectiontopscore}>
        <Container maxWidth="xl">
          <div className={styles.mobilefull} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 120 }}>
            <div>
              <Typography
                color="white"
                variant="h3"
                paddingTop={{
                  lg: 28,
                  md: 28,
                  sm: 0,
                  xs: 0,
                }}
                fontSize={{
                  lg: 50,
                  md: 40,
                  sm: 30,
                  xs: 20,
                }}
              >
                TOP SCORES
              </Typography>
              <Typography
                color="white"
                fontSize={{
                  lg: 24,
                  md: 20,
                  sm: 16,
                  xs: 12,
                }}
              >
                This top score from various games provided on this platform
              </Typography>

              <br />
              {' '}
              <br />
              <Button variant="contained" style={{ width: '100%', padding: '10px', maxWidth: '300px' }}>
                <Link href="/top-score">
                  <a href="/top-score" style={{ textDecoration: 'none' }}>See More</a>
                </Link>
              </Button>

            </div>
            <div className={styles.mobilepaddingtop50}>
              <div className={[styles.card, styles.card1].join(' ')}>
                <div className={styles.cardbody}>
                  <div className={styles.cardcol1}>
                    <Image className={styles.sectionpersonimg} src="/images/Evan-Lahti.jpg" alt="Testimonial 1" width={67} height={66} />
                  </div>
                  <div className={styles.cardcol2}>
                    <Typography
                      color="orange"
                      fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 16,
                        xs: 12,
                      }}
                    >
                      Evan Lahti
                    </Typography>
                    <Typography
                      color="white"
                      style={{ opacity: '0.5' }}
                      fontSize={{
                        lg: 20,
                        md: 18,
                        sm: 14,
                        xs: 11,
                      }}
                    >
                      PC Gamer
                    </Typography>
                  </div>
                  <div className={styles.cardcol3}>
                    <Link href="https://twitter.com/">
                      <a href="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                        <Image src="/images/twitter.svg" alt="Twitter" width={19} height={15} />
                      </a>
                    </Link>
                  </div>
                  <div style={{ clear: 'both' }} />
                  <Typography
                    paddingTop={2}
                    color="white"
                    fontSize={{
                      lg: 20,
                      md: 18,
                      sm: 14,
                      xs: 11,
                    }}
                  >
                    “One of my gaming highlights of the year.”
                  </Typography>
                  <Typography
                    paddingTop={1}
                    color="white"
                    style={{ opacity: '0.5' }}
                    fontSize={{
                      lg: 16,
                      md: 16,
                      sm: 12,
                      xs: 10,
                    }}
                  >
                    June 18, 2021
                  </Typography>
                </div>
              </div>
              <div className={[styles.card, styles.card2].join(' ')}>
                <div className={styles.cardbody}>
                  <div className={styles.cardcol1}>
                    <Image className={styles.sectionpersonimg} src="/images/Jada-Griffin.jpg" alt="Testimonial 2" width={67} height={66} />
                  </div>
                  <div className={styles.cardcol2}>
                    <Typography
                      color="orange"
                      fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 16,
                        xs: 12,
                      }}
                    >
                      Jada Griffin
                    </Typography>
                    <Typography
                      color="white"
                      style={{ opacity: '0.5' }}
                      fontSize={{
                        lg: 20,
                        md: 18,
                        sm: 14,
                        xs: 11,
                      }}
                    >
                      Nerdreactor
                    </Typography>
                  </div>
                  <div className={styles.cardcol3}>
                    <Link href="https://twitter.com/">
                      <a href="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                        <Image src="/images/twitter.svg" alt="Twitter" width={19} height={15} />
                      </a>
                    </Link>
                  </div>
                  <div style={{ clear: 'both' }} />
                  <Typography
                    color="white"
                    fontSize={{
                      lg: 20,
                      md: 18,
                      sm: 14,
                      xs: 11,
                    }}
                  >
                    “The next big thing in the world of streaming and survival games.”
                  </Typography>
                  <Typography
                    paddingTop={1}
                    color="white"
                    style={{ opacity: '0.5' }}
                    fontSize={{
                      lg: 16,
                      md: 16,
                      sm: 12,
                      xs: 10,
                    }}
                  >
                    July 10, 2021
                  </Typography>
                </div>
              </div>
              <div className={[styles.card, styles.card3].join(' ')}>
                <div className={styles.cardbody}>
                  <div className={styles.cardcol1}>
                    <Image className={styles.sectionpersonimg} src="/images/Aaron-Williams.jpg" alt="Testimonial 3" width={67} height={66} />
                  </div>
                  <div className={styles.cardcol2}>
                    <Typography
                      color="orange"
                      fontSize={{
                        lg: 24,
                        md: 20,
                        sm: 16,
                        xs: 12,
                      }}
                    >
                      Aaron Williams
                    </Typography>
                    <Typography
                      color="white"
                      style={{ opacity: '0.5' }}
                      fontSize={{
                        lg: 20,
                        md: 18,
                        sm: 14,
                        xs: 11,
                      }}
                    >
                      Uproxx
                    </Typography>
                  </div>
                  <div className={styles.cardcol3}>
                    <Link href="https://twitter.com/">
                      <a href="https://twitter.com/" style={{ textDecoration: 'none' }} target="_blank" rel="noreferrer">
                        <Image src="/images/twitter.svg" alt="Twitter" width={19} height={15} />
                      </a>
                    </Link>
                  </div>
                  <div style={{ clear: 'both' }} />
                  <Typography
                    color="white"
                    fontSize={{
                      lg: 20,
                      md: 18,
                      sm: 14,
                      xs: 11,
                    }}
                  >
                    “Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.”
                  </Typography>
                  <Typography
                    paddingTop={1}
                    color="white"
                    style={{ opacity: '0.5' }}
                    fontSize={{
                      lg: 16,
                      md: 16,
                      sm: 12,
                      xs: 10,
                    }}
                  >
                    December 24, 2018
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.sectionnewsletter}>
        <Container maxWidth="xl">
          <div className={styles.mobilefull} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: 20 }}>
            <div style={{ textAlign: 'center' }}>
              <Image src="/images/newsletter.jpg" alt="Newsletter" width={405} height={471} />
            </div>
            <div>
              <Typography
                color="white"
                variant="h6"
                paddingTop={10}
                fontSize={{
                  lg: 20,
                  md: 20,
                  sm: 15,
                  xs: 15,
                }}
              >
                Want to stay in touch?
              </Typography>

              <Typography
                color="white"
                variant="h3"
                paddingTop={2}
                fontSize={{
                  lg: 50,
                  md: 40,
                  sm: 30,
                  xs: 20,
                }}
              >
                NEWSLETTER SUBSCRIBE
              </Typography>

              <Typography
                color="white"
                paddingTop={5}
                fontSize={{
                  lg: 24,
                  md: 20,
                  sm: 16,
                  xs: 12,
                }}
              >
                In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
              </Typography>
              <br />
              <input
                type="text"
                style={{ padding: '12px 40px' }}
                placeholder="Your Email"
              />
              <Button variant="contained" style={{ padding: '10px 40px' }}>Subscribe Now</Button>

            </div>
          </div>
        </Container>
      </div>

      <footer className={styles.footer}>
        Powered by
        {' '}
        <span className={styles.footerpowered}>Lowkey Pro</span>
      </footer>
    </>
  );
}
