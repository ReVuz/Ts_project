import React, { useState, useEffect } from 'react';
import { MovieShowsWrapper } from '../styles/Styles.modules';
import axios from 'axios';
import { trending } from '../modules/ApiLinks';
import { log } from 'console';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;

  first_air_date: string;
  name: string;
}

interface DataProps {
  apiEndpoint: string;
  numberOfMovies: number;
  showButtons: boolean;
  tvShowOn: boolean;
  MoviesOn: boolean;
  itemHeading: string;
}

const DisplayItems: React.FC<DataProps> = ({
  apiEndpoint,
  numberOfMovies,
  showButtons,
  tvShowOn,
  MoviesOn,
  itemHeading,
}) => {
  const [showItems, setShowItems] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        console.log('working');

        const response = await axios.get(`${trending}`, {
          params: {
            page: currentPage,
          },
        });

        const { results, total_pages } = response.data;
        setShowItems(results.slice(0, 16));
        setTotalPages(total_pages);
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.log('Error fetching movies: ', error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  function getFormattedDate(dateString: string | number | Date) {
    const option = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    } as Intl.DateTimeFormatOptions;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', option);
  }

  return (
    <MovieShowsWrapper>
      {showItems.map((movie) => (
        <Card key={movie.id} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              {movie.title}
            </Typography>
            <img src={movie.poster_path} alt={movie.title} />
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              {movie.release_date}
            </Typography>
            <Typography variant='body2'>
              {movie.vote_average}
              <br />
            </Typography>
          </CardContent>
        </Card>
      ))}
    </MovieShowsWrapper>
  );
};

export default DisplayItems;
