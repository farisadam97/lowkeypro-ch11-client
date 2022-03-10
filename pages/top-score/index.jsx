import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/topscore.module.css';
import Navbar from '../../components/navbar/Navbar.component';
import { getUserAction } from '../../redux/actions/users';

export default function TopscorePage() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(
      getUserAction(),
    );
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div className={styles.pagetopscore}>
        <Container maxWidth="xl">
          <div>
            <Typography
              variant="h3"
              fontSize={{
                lg: 50,
                md: 40,
                sm: 30,
                xs: 20,
              }}
            >
              List Top Scores
            </Typography>
            <Typography
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

            <div
              className={styles.tableleaderboardhead}
              style={{
                borderBottom: '1px solid black', paddingTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridGap: 20,
              }}
            >
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  No
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  Name
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  Email
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  Username
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  City
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h3"
                  fontSize={{
                    lg: 30,
                    md: 30,
                    sm: 20,
                    xs: 14,
                  }}
                >
                  Score
                </Typography>
              </div>
            </div>

            <div className={styles.tableleaderboard}>
              {
				users.data.length > 0 ? users.data.sort((a, b) => (a.total_score < b.total_score ? 1 : -1)).map((user, i) => (

  <div key={user.id} className={styles.tableleaderboardrow} style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridGap: 20 }}>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {i + 1}
      </Typography>
    </div>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {user.name}
      </Typography>
    </div>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {user.email}
      </Typography>
    </div>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {user.username}
      </Typography>
    </div>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {user.city}
      </Typography>
    </div>
    <div>
      <Typography
        fontSize={{
          lg: 20,
          md: 20,
          sm: 16,
          xs: 12,
        }}
      >
        {user.total_score}
      </Typography>
    </div>
  </div>

				)) : (
  <div>
    <p>Loading</p>
  </div>
				)
						}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
