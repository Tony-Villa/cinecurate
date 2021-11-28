import React, { useState } from 'react';
import './MovieGraph.scss';

function MovieGraph() {
  const [movieTitle, setMovieTitle] = useState('');
  const [cine, setCine] = useState(0);
  const [edit, setEdit] = useState(0);
  const [hmu, setHmu] = useState(0);
  const [act, setAct] = useState(0);
  const [art, setArt] = useState(0);
  const [sound, setSound] = useState(0);
  const [story, setStory] = useState(0);
  const [vfx, setVfx] = useState(0);

  const data = [
    {
      category: 'cinematography',
      movieTitle: cine,
    },
    {
      category: 'editing',
      movieTitle: edit,
    },
    {
      category: 'Hair/Makeup',
      movieTitle: hmu,
    },
    {
      category: 'acting',
      movieTitle: act,
    },
    {
      category: 'Art/Prod Design',
      movieTitle: art,
    },
    {
      category: 'Sound/Music',
      movieTitle: sound,
    },
    {
      category: 'Story',
      movieTitle: story,
    },
    {
      category: 'vfx',
      movieTitle: vfx,
    },
  ];

  const theme = {
    axis: {
      ticks: {
        text: {
          fill: 'rgba(255, 255, 255, .50)',
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
    width: 720,
    height: 500,
    margin: { top: 60, right: 60, bottom: 60, left: 60 },
    data: data,
    indexBy: 'category',
    keys: ['Sicario'],
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
            dataFrom: 'keys',
            data: commonProperties.keys.map((id, index) => ({
              label: id?.length > 6 ? id.slice(0, 6) + '...' : id,
            })),
            anchor: 'top-left',
            direction: 'column',
            itemWidth: 56,
            itemHeight: 12,
            itemsSpacing: 12,
            itemTextColor: '#ffffff',
            symbolSize: 10,
            symbolShape: 'circle',
            translateX: -50,
            translateY: 50,
          },
        ]}
      />
    </div>
  );
}

export default MovieGraph;
