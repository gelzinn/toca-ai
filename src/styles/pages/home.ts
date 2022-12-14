import styled from "styled-components";

export const Presentation = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;

  height: calc(100vh - 80px);
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 1rem;

  overflow: hidden;

  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    color: var(--brand-red);

    gap: 2rem;

    width: 100%;
    max-width: 45%;

    z-index: 2;

    > h1 {
      font-size: 5rem;
      line-height: 90%;

      @media (max-width: 768px) {
        font-size: 2.75rem;
        width: 100%;
        max-width: 420px;

        line-height: 80%;
      }

      @media (max-width: 500px) {
        /* font-size: 2rem; */
        width: 100%;
        max-width: 420px;
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      /* text-transform: capitalize; */
      font-size: 1.25rem;

      gap: 1rem;

      color: var(--beige-500);
      background: var(--brand-red);
      border-radius: 0.5rem;
      padding: 0.85rem 1.5rem;

      &:hover {
        background: var(--brand-red-500);
      }
    }

    > p {
      font-size: 1.25rem;
    }

    @media (min-width: 1200px) {
      padding-bottom: 80px;
    }

    @media (max-width: 1200px) {
      text-align: center;
      align-items: center;

      padding-bottom: 80px;

      max-width: 650px;
    }

    @media (max-width: 768px) {
      padding-bottom: unset;
      padding: 5rem 0;
    }
  }

  > img {
    position: absolute;

    @media (min-width: 1200px) {
      right: -15%;
      top: 0;

      width: 100%;
      height: 100%;
    }

    @media (max-width: 1200px) {
      right: -20%;
      bottom: -13%;

      height: 100vh;

      mask-image: linear-gradient(to right, transparent, black);
    }

    @media (max-width: 768px) {
      right: -25%;
      bottom: -50%;
      height: 80vh;

      mask-image: linear-gradient(
        to right,
        transparent,
        rgba(255, 255, 255, 0.05),
        black
      );

      opacity: 0.5;
    }

    z-index: 0;

    object-fit: contain;

    pointer-events: none;
    user-select: none;

    mask-image: linear-gradient(to right, transparent 25%, black 50%);
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    height: 50vh;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 100%;
  width: 100%;
  margin: 2rem auto 0;

  background: var(--beige-500);
  padding: 10rem 1rem;
  gap: 5rem;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--brand-red);

    > h1 {
      font-size: 4rem;
      line-height: 100%;
    }

    @media (max-width: 900px) {
      text-align: center;

      > h1 {
        font-size: 2.5rem;
        line-height: 80%;
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    text-transform: capitalize;
    font-size: 1.25rem;

    gap: 1rem;

    color: var(--beige-500);
    background: var(--brand-red);
    border-radius: 0.5rem;
    padding: 0.85rem 1.5rem;

    cursor: pointer;

    &:hover {
      background: var(--brand-red-500);
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 1rem;

    width: 100%;
    max-width: 1200px;

    list-style: none;
    z-index: 1;

    > li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      text-align: center;
      gap: 1rem;

      flex-basis: calc(100% / 3.25);

      > svg {
        width: 100%;
        max-width: 5rem;
        height: 100%;

        color: var(--brand-red);
      }

      > span {
        font-size: 1.5rem;
        font-weight: bold;

        line-height: 100%;
      }
    }

    @media (max-width: 900px) {
      flex-wrap: nowrap;
      flex-direction: column;

      gap: 5rem;

      > li {
        gap: 1rem;

        > span {
          font-size: 1.25rem;
        }
      }
    }
  }

  &:before,
  &:after {
    --lines-height: 45px;

    content: "";
    width: 35vw;
    height: var(--lines-height);

    background-color: var(--beige-700);

    position: absolute;

    z-index: 0;

    @media (max-width: 768px) {
      width: 50vw;
    }
  }

  &:before {
    left: -10%;
    bottom: calc((calc(-1 * var(--lines-height))) / 2 + 0.25rem);
    transform: skewX(-20deg);
  }

  &:after {
    right: -10%;
    top: calc((calc(-1 * var(--lines-height)) / 2) - 0.25rem);
    transform: skewX(20deg);
  }

  @media (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const MostPopularSongs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 5rem 1rem;
  gap: 5rem;

  overflow: visible;
  position: relative;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--brand-red);

    > h1 {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 1rem;

      font-size: 4rem;
      line-height: 100%;
      margin-bottom: 1rem;
    }

    @media (max-width: 900px) {
      text-align: center;

      > h1 {
        font-size: 2.5rem;
        line-height: 80%;
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    gap: 2rem;
    width: 100%;

    > li {
      display: flex;
      flex-basis: 100%;
      align-items: flex-start;

      width: 100%;

      position: relative;
      list-style-type: decimal;
      border-radius: 1rem;

      &::marker {
        font-size: 10rem;
        font-weight: bold;
      }

      .metadata {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        position: relative;

        > img {
          width: 100%;
          max-width: 250px;
          /* min-width: 200px; */

          border-radius: 0.25rem;

          pointer-events: none;
          user-select: none;
        }

        > p {
          display: flex;
          justify-content: center;
          align-items: center;

          position: absolute;

          font-weight: bold;

          border-radius: 50%;

          background: var(--beige-500);
          color: var(--brand-red);
          /* -webkit-text-stroke: 0.5rem var(--brand-red); */

          z-index: 2;

          > i {
            /* margin-top: -0.5rem; */
            font-size: 1rem;

            font-weight: normal;
          }

          @media (min-width: 1450px) {
            width: 4rem;
            height: 4rem;
            font-size: 1.5rem;

            top: 50%;
            left: 0%;
            transform: translate(-50%, -50%);
          }

          @media (max-width: 1450px) {
            width: 4rem;
            height: 4rem;
            font-size: 1.5rem;

            bottom: -15%;
            transform: translateX(-50%, -50%);
          }
        }

        @media (min-width: 768px) {
          margin-right: 2rem;
        }
      }

      .about-music {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        padding: 1rem 0;
        width: 100%;
        height: 100%;

        span {
          font-size: 1.5rem;
          font-weight: bold;

          line-height: 100%;

          width: 100%;
        }

        .artists {
          display: flex;
          justify-content: flex-start;
          align-items: center;

          width: 100%;

          > p {
            font-size: 1rem;
            font-weight: 200;

            width: 100%;
          }
        }

        audio {
          &::-webkit-media-controls-panel {
            background-color: var(--beige-100);
          }
          &::-webkit-media-controls-toggle-closed-captions-button,
          &::-webkit-media-controls-rewind-button {
            display: none;
          }
        }

        @media (max-width: 768px) {
          align-items: center;
        }
      }

      .player {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 100%;
        max-width: 100px;
        height: 100%;

        border: none;
        cursor: pointer;

        background: var(--beige-700);

        > svg {
          width: 100%;
          max-width: 3rem;
          height: 100%;
          max-height: 3rem;

          color: var(--beige-100);

          @media (max-width: 768px) {
            color: var(--brand-red);
          }
        }

        @media (min-width: 768px) {
          border-radius: 0 1rem 1rem 0;

          &:hover {
            > svg {
              color: var(--brand-red);
            }
          }
        }

        @media (max-width: 768px) {
          border-radius: 0 0 1rem 1rem;
        }
      }

      @media (min-width: 768px) {
        &:nth-child(odd) {
          box-shadow: 0 0 0 0.25rem var(--beige-500) inset;

          .metadata {
            box-shadow: 0.25rem 0.25rem var(--brand-red);
            border-radius: 0.25rem;
          }
        }

        &:nth-child(even) {
          background: var(--beige-500);

          .metadata {
            box-shadow: 0.25rem 0.25rem var(--brand-red);
            border-radius: 0.25rem;

            > p {
              color: var(--beige-500);
              background: var(--brand-red);
            }
          }
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        background: var(--beige-500);
        max-width: 400px;

        gap: 0;

        .metadata {
          box-shadow: 0 0.35rem var(--brand-red);
          border-radius: 0.25rem;

          width: 100%;

          margin-bottom: 2rem;

          > img {
            max-width: unset;
            width: 100%;
            height: 100%;

            object-fit: cover;
          }

          > p {
            bottom: -10%;
            border: 0.25rem solid var(--brand-red);

            > i {
              margin-top: unset;
            }
          }
        }

        .about-music {
          text-align: center;
          padding: 1rem;

          > span {
            font-size: 1.25rem;
          }

          > p {
            font-size: 0.85rem;
          }

          .artists {
            justify-content: center;
          }
        }

        .player {
          width: 100%;
          max-width: unset;

          padding: 0.5rem 0;
        }
      }

      @media (max-width: 500px) {
        max-width: 80%;

        .metadata > img {
          object-fit: contain;
        }
      }
    }

    > button {
      margin: 0 auto;

      color: var(--beige-100);
      background: var(--brand-red);
      border-radius: 1rem;
      border: unset;

      padding: 0.85rem 3rem;

      width: 100%;
      max-width: 300px;

      font-size: 1rem;

      cursor: pointer;
    }

    @media (max-width: 1450px) {
      gap: 2rem;
    }

    @media (min-width: 768px) and (max-width: 1450px) {
      gap: 3rem;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const InviteFriend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  margin: 0 auto;

  /* background: var(--beige-500); */
  padding: 5rem 1rem;

  overflow: hidden;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 10rem;

    width: 100%;
    max-width: 1200px;

    > img {
      width: 100%;
      max-width: 450px;
      height: 600px;

      object-fit: cover;

      pointer-events: none;
      user-select: none;

      @media (max-width: 768px) {
        height: 50vh;

        object-fit: cover;
      }
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      color: var(--brand-red);

      gap: 1.5rem;

      > h1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        font-size: 3.5rem;
        line-height: 80%;

        width: 100%;
        gap: 1rem;

        > svg {
          width: 100%;
          max-width: 3rem;
          height: 100%;

          transform: rotate(-15deg);
        }

        @media (max-width: 768px) {
          font-size: 2.75rem;
          width: 100%;
          max-width: 420px;
          line-height: 80%;
        }
      }

      > p {
        > u {
          text-decoration: none;

          @media (max-width: 768px) {
            display: none;
          }
        }
      }

      > a {
        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        font-size: 1.25rem;

        gap: 1rem;

        color: var(--beige-500);
        background: var(--brand-red);
        border-radius: 0.5rem;
        padding: 0.85rem 1.5rem;

        cursor: pointer;

        &:hover {
          background: var(--brand-red-500);
        }
      }
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      gap: 2rem;

      > div {
        text-align: center;

        align-items: center;

        > h1 {
          justify-content: center;
          text-align: center;
        }
      }
    }
  }
`;
