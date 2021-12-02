import React, { useContext, useEffect, useState } from 'react';
import { Radar } from '@nivo/radar';
import { useParams } from 'react-router-dom';
import './MovieGraph.scss';
import { ReloadContext } from '../../../Context/ReloadContext';

function MovieGraph({ title }) {
  const { isReload, setIsReload } = useContext(ReloadContext);

  const [movieTitle, setMovieTitle] = useState('');
  const [cine, setCine] = useState(0);
  const [edit, setEdit] = useState(0);
  const [hmu, setHmu] = useState(0);
  const [act, setAct] = useState(0);
  const [art, setArt] = useState(0);
  const [sound, setSound] = useState(0);
  const [story, setStory] = useState(0);
  const [vfx, setVfx] = useState(0);

  const params = useParams();

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/avgrating/${params.id}`);
      const parseRes = await res.json();
      const ratingData = parseRes.avgRatings;

      if (ratingData.length) {
        setMovieTitle(ratingData[0].movie_title);

        ratingData.map((rating, idx) => {
          if (rating.category === 'cinematography') {
            setCine(rating.avgrating);
          } else if (rating.category === 'editing') {
            setEdit(rating.avgrating);
          } else if (rating.category === 'hmu') {
            setHmu(rating.avgrating);
          } else if (rating.category === 'acting') {
            setAct(rating.avgrating);
          } else if (rating.category === 'art') {
            setArt(rating.avgrating);
          } else if (rating.category === 'sound') {
            setSound(rating.avgrating);
          } else if (rating.category === 'story') {
            setStory(rating.avgrating);
          } else if (rating.category === 'vfx') {
            setVfx(rating.avgrating);
          } else {
            return;
          }
        });
      } else {
        setCine(0);
        setEdit(0);
        setHmu(0);
        setAct(0);
        setArt(0);
        setSound(0);
        setStory(0);
        setVfx(0);
      }
    };

    fetchStats();
  }, [params.id, isReload]);

  const data = [
    {
      category: 'Cinematography',
      [movieTitle]: cine,
    },
    {
      category: 'Hair/Makeup',
      [movieTitle]: hmu,
    },
    {
      category: 'Acting',
      [movieTitle]: act,
    },
    {
      category: 'Story',
      [movieTitle]: story,
    },
    {
      category: 'Art/Prod Design',
      [movieTitle]: art,
    },
    {
      category: 'Sound/Music',
      [movieTitle]: sound,
    },
    {
      category: 'Editing',
      [movieTitle]: edit,
    },

    {
      category: 'VFX',
      [movieTitle]: vfx,
    },
  ];

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

  const commonProperties = {
    width: 500,
    height: 420,
    margin: { top: 60, right: 0, bottom: 60, left: 60 },
    data: data,
    maxValue: 10,
    indexBy: 'category',
    keys: [movieTitle],
    borderColor: '#e41f7b',
    colors: ['#e41f7b'],
    theme: theme,
    dotSize: 10,
    dotColor: '#2D374D',
    dotBorderColor: '#e41f7b',
    dotBorderWidth: 2,
    enableDotLabel: true,
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
            translateX: -50,
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
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default MovieGraph;
