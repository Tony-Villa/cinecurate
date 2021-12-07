import React, { useContext, useEffect, useState } from 'react';
import { Radar, ResponsiveRadar } from '@nivo/radar';
import { useParams } from 'react-router-dom';
import './AnalyzeGraph.scss';
import { ReloadContext } from '../../../Context/ReloadContext';

const AnalyzeGraph = ({ currentMovies }) => {
  const { isReload, setIsReload } = useContext(ReloadContext);
  const params = useParams();

  const [movieListData, setMovieListData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  console.log('current movies', currentMovies);
  console.log('movie list data', movieListData);

  const fetchData = async (id) => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/avgrating/${id}`);
      const parseRes = await res.json();
      const ratingData = parseRes.avgRatings;

      return ratingData;
    } catch (err) {
      console.log(err.message);
    }
  };

  const getData = async (arr) => {
    let i = 0;
    let dataList = [];
    for (i; i < arr.length; i++) {
      const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/avgrating/${arr[i].id}`);
      const json = await response.json();

      //   console.log(json);
      dataList.push(json);
    }
    return dataList;
  };

  const data = [
    {
      category: 'Cinematography',
    },
    {
      category: 'Hair/Makeup',
    },
    {
      category: 'Acting',
    },
    {
      category: 'Story',
    },
    {
      category: 'Art/Prod Design',
    },
    {
      category: 'Sound/Music',
    },
    {
      category: 'Editing',
    },
    {
      category: 'VFX',
    },
  ];

  useEffect(async () => {
    let movieData = await getData(currentMovies);

    const handleMovieData = (movieData) => {
      movieData.map((movie, idx) => {
        data.map((el, i) => {
          el[movie.title] = '0';
        });

        movie.avgRatings.map((rating) => {
          if (!rating.category) {
            data.forEach((el, i) => {
              el[rating.movie_title] = '0';
            });
          }

          if (rating.category === 'cinematography') {
            data[0][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'hmu') {
            data[1][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'acting') {
            data[2][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'story') {
            data[3][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'art') {
            data[4][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'sound') {
            data[5][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'editing') {
            data[6][rating.movie_title] = rating.avgrating;
          } else if (rating.category === 'vfx') {
            data[7][rating.movie_title] = rating.avgrating;
          }
        });
      });
    };

    handleMovieData(movieData);

    setGraphData(data);
    setMovieListData(movieData);
  }, []);

  useEffect(() => {
    console.log('graph Data', graphData);
  }, [graphData]);

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: 'rgba(255, 255, 255, .80)',
          fontSize: 16,
        },
      },
    },
    grid: {
      line: {
        stroke: 'rgba(255, 255, 255, .15)',
        strokeDasharray: '0',
      },
    },
    dots: {
      text: {
        fill: '#ffffff',
        fontSize: 12,
        fontWeight: 400,
      },
    },
    tooltip: {
      container: {
        background: '#1c1c1c',
        color: 'inherit',
        boxShadow: '0 3px 9px rgba(0, 0, 0, 0.5)',
        fontFamily: 'monospace',
      },
    },
  };

  let titleArr = movieListData.map((el) => el.title);

  const commonProperties = {
    width: 720,
    height: 500,
    margin: { top: 60, right: 0, bottom: 60, left: 10 },
    data: graphData,
    maxValue: 10,
    indexBy: 'category',
    keys: titleArr,
    borderColor: '#e41f7b',
    colors: ['#e41f7b', '#FD7014', '#00FFF5', '#3E065F'],
    theme: theme,
    dotSize: 10,
    dotColor: '#2D374D',
    dotBorderColor: '#fff',
    dotBorderWidth: 2,
    enableDotLabel: false,
    dotLabelYOffset: -8,
    blendMode: 'screen',
    motionConfig: 'wobbly',
    gridLabelOffset: 25,
    gridShape: 'linear',
  };

  return (
    <div className="movie-graph">
      <Radar
        {...commonProperties}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: 0,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#fff',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default AnalyzeGraph;
