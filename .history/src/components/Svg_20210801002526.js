import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import "twin.macro";

import {

  useViewportScroll,
  useTransform,

} from "framer-motion";

Svg.propTypes = {
  removeAnimation: PropTypes.func,
  scale: PropTypes.func,
  opacity1: PropTypes.func,
  opacity: PropTypes.func,
  hide: PropTypes.func,
  zIndex: PropTypes.func,
  logic: PropTypes.func,
};

function Svg({ removeAnimation, scale, hide, opacity }) {

  const { scrollYProgress } = useViewportScroll();
  const hide1 = useTransform(scrollYProgress, [0.12499, 0.125], [1, 0]);

  return (
    <>
      <motion.svg
        tw="fixed top-0 mt-20 h-64"
        animate={
          ({
            originY: -0.3,
            originX: 0,
            opacity,
            transition: "easein",
            // height: "64",
          },
          removeAnimation)
        }
        transition={{
          ease: "easeInOut",
        }}
        style={{
          scale,
          position: "fixed",
          top: 0,
          // height: "64px",
          marginTop: "80",
          opacity: hide1,
          zIndex: 600,
        }}
        version="1.1"
        id="Ebene_1"
        x="0px"
        y="0px"
        width="721px"
        height="722px"
        viewBox="60.445 233.775 721 722"
        enableBackground="new 60.445 233.775 721 722"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="g26">
          <motion.path
            fill="none"
            stroke="#1D1102"
            strokeWidth="44.8518"
            strokeMiterlimit="10"
            d="M758.46,932.218H84.797V258.547H758.46   V932.218z"
            id="path6"
            // animate
          />

          <g id="g18">
            <g id="g16">
              <motion.path
                fill="#1D1102"
                d="M515.117,495.203c0,0,0.58,0.604,1.701,1.772c1.098,1.191,2.85,2.846,4.857,5.258     c4.172,4.677,9.939,11.917,15.832,22.062c0.729,1.272,1.477,2.579,2.244,3.919c0.701,1.375,1.422,2.785,2.158,4.229     c0.77,1.429,1.424,2.954,2.121,4.5c0.686,1.551,1.445,3.112,2.057,4.774c2.693,6.546,5.131,13.844,6.951,21.852     c1.807,8.002,3.127,16.688,3.533,25.938c0.369,9.241-0.008,19.047-1.662,29.145c-1.682,10.082-4.42,20.488-8.604,30.809     c-4.105,10.352-9.764,20.537-16.756,30.234c-0.84,1.238-1.787,2.398-2.715,3.588c-0.934,1.184-1.873,2.369-2.813,3.561     c-0.996,1.146-1.996,2.295-2.998,3.447l-1.514,1.734l-1.641,1.715c-1.021,1.064-2.047,2.135-3.076,3.205     c-1.055,1.074-2.285,2.172-3.432,3.264c-2.318,2.258-4.744,4.211-7.168,6.277c-4.957,3.955-10.152,7.793-15.752,11.131     c-2.746,1.77-5.664,3.262-8.553,4.867c-1.465,0.756-2.967,1.451-4.459,2.176l-2.248,1.076l-2.301,0.975     c-6.107,2.701-12.521,4.838-19.08,6.664c-1.65,0.418-3.305,0.838-4.963,1.258c-1.668,0.365-3.352,0.691-5.035,1.037     c-1.68,0.371-3.379,0.633-5.086,0.887c-1.707,0.238-3.41,0.576-5.135,0.73c-13.761,1.615-27.992,1.287-42.018-1.234     c-7.018-1.238-13.949-3.104-20.786-5.346c-6.821-2.305-13.437-5.256-19.892-8.539c-6.456-3.303-12.589-7.234-18.471-11.508     c-5.857-4.314-11.343-9.113-16.566-14.172l-1.945-2.041l-1.721-1.826l-0.859-0.912c-0.285-0.301-0.569-0.598-0.888-0.979     l-1.849-2.154l-1.841-2.16c-0.621-0.721-1.229-1.443-1.761-2.162l-3.322-4.328c-4.258-5.891-8.23-12-11.528-18.461     c-3.288-6.455-6.232-13.074-8.547-19.893c-0.641-1.684-1.083-3.432-1.623-5.143l-0.773-2.578     c-0.239-0.863-0.441-1.736-0.663-2.604c-0.42-1.742-0.893-3.467-1.261-5.215c-0.347-1.752-0.694-3.502-1.04-5.25     c-2.562-14.025-2.845-28.266-1.262-42.033c1.686-13.762,5.241-27.072,10.575-39.319l0.974-2.301l1.077-2.25     c0.726-1.494,1.423-2.994,2.169-4.465c1.609-2.887,3.1-5.81,4.872-8.555c3.34-5.604,7.182-10.801,11.14-15.761     c2.063-2.419,4.041-4.873,6.232-7.114c1.08-1.135,2.117-2.299,3.223-3.391c1.117-1.078,2.231-2.152,3.343-3.224l1.773-1.694     l1.666-1.444c1.109-0.961,2.214-1.919,3.316-2.874c1.211-0.959,2.417-1.916,3.62-2.868c1.209-0.945,2.4-1.921,3.633-2.753     c9.703-6.991,19.893-12.652,30.251-16.75c10.326-4.18,20.734-6.922,30.821-8.594c10.1-1.658,19.91-2.021,29.15-1.653     c9.25,0.404,17.938,1.733,25.942,3.54c8.006,1.821,15.307,4.257,21.85,6.956c1.662,0.61,3.227,1.37,4.775,2.056     c1.547,0.698,3.07,1.353,4.5,2.121c1.443,0.736,2.854,1.457,4.229,2.16c1.342,0.767,2.646,1.515,3.92,2.242     c0.637,0.365,1.264,0.726,1.881,1.081c0.609,0.367,1.193,0.762,1.779,1.133c1.17,0.742,2.307,1.465,3.406,2.165     c2.182,1.431,4.148,2.888,6.02,4.182c1.813,1.374,3.457,2.689,4.98,3.87c1.516,1.191,2.797,2.39,3.996,3.4     c2.412,2.009,4.066,3.763,5.258,4.859C514.513,494.625,515.117,495.203,515.117,495.203z M515.117,495.203     c0,0-0.607-0.574-1.787-1.686c-1.201-1.087-2.871-2.824-5.299-4.812c-4.73-4.087-11.945-9.908-22.215-15.526     c-10.215-5.616-23.457-11.238-39.439-14.103c-7.959-1.497-16.574-2.259-25.615-2.13c-9.039,0.11-18.518,1.206-28.104,3.486     c-9.588,2.273-19.254,5.808-28.66,10.516c-9.394,4.75-18.39,10.917-26.729,18.169c-1.081,0.879-2.035,1.833-3.028,2.765     c-0.988,0.938-1.979,1.878-2.975,2.822c-1.01,1.052-2.022,2.106-3.039,3.166l-1.526,1.59l-1.284,1.494     c-0.921,1.067-1.845,2.137-2.771,3.21c-0.912,1.083-1.754,2.232-2.637,3.346c-1.8,2.203-3.376,4.596-5.032,6.933     c-3.143,4.794-6.147,9.735-8.648,14.988c-1.353,2.57-2.422,5.293-3.612,7.958c-0.548,1.354-1.052,2.73-1.583,4.097l-0.786,2.052     l-0.685,2.096c-7.49,22.277-8.925,47.139-3.529,70.743c2.711,11.789,7.021,23.256,12.885,33.912l2.277,3.953     c0.774,1.309,1.638,2.563,2.432,3.861l1.22,1.93l1.316,1.865c0.892,1.234,1.722,2.514,2.657,3.717l2.817,3.602     c0.465,0.623,0.941,1.174,1.42,1.713l1.426,1.646l1.419,1.652c0.214,0.266,0.51,0.568,0.803,0.873l0.868,0.906l1.736,1.811     l0.867,0.906l0.43,0.455l0.215,0.23c-0.025-0.023,0.36,0.375-0.002,0.004c4.359,4.279,8.919,8.354,13.797,12.012     c1.204,0.938,2.482,1.768,3.717,2.656l1.866,1.318l1.929,1.221c1.287,0.811,2.541,1.678,3.853,2.449l3.954,2.275     c10.664,5.852,22.122,10.199,33.918,12.902c23.611,5.426,48.487,3.971,70.776-3.52l2.098-0.686l2.053-0.789     c1.371-0.525,2.736-1.053,4.102-1.578c2.664-1.189,5.389-2.264,7.961-3.619c5.254-2.504,10.197-5.512,14.992-8.658     c2.334-1.654,4.75-3.256,6.877-4.99c1.104-0.873,2.188-1.65,3.305-2.598c1.123-0.973,2.242-1.943,3.355-2.91l1.547-1.344     l1.523-1.459c1.016-0.973,2.029-1.939,3.039-2.906c0.963-1.016,1.922-2.025,2.877-3.033c0.953-1.014,1.932-2.002,2.803-3.074     c7.252-8.346,13.426-17.344,18.164-26.746c4.703-9.41,8.242-19.078,10.504-28.672c2.283-9.59,3.365-19.072,3.477-28.112     c0.129-9.043-0.645-17.656-2.143-25.616c-2.867-15.984-8.5-29.223-14.115-39.438c-5.625-10.266-11.443-17.481-15.531-22.211     c-1.986-2.428-3.727-4.097-4.813-5.298C515.691,495.812,515.117,495.203,515.117,495.203z"
                id="path14"
              />
            </g>
          </g>
        </g>
      </motion.svg>
      <motion.svg
        tw="fixed top-0 mt-20 h-64"
        animate={
          ({
            originY: -0.3,
            originX: 0,

            transition: "easein",
          },
          removeAnimation)
        }
        transition={{
          ease: "easeInOut",
        }}
        style={{
          scale,
          opacity: hide,
          zIndex: 500,
        }}
        version="1.1"
        id="Ebene_1"
        x="0px"
        y="0px"
        width="721px"
        height="722px"
        viewBox="60.445 233.775 721 722"
        enableBackground="new 60.445 233.775 721 722"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="g26">
          <motion.path
            fill="none"
            stroke="#ffffff"
            strokeWidth="44.8518"
            strokeMiterlimit="10"
            d="M758.46,932.218H84.797V258.547H758.46   V932.218z"
            id="path6"
          />

          <g id="g18">
            <g id="g16">
              <motion.path
                fill="#ffffff"
                d="M515.117,495.203c0,0,0.58,0.604,1.701,1.772c1.098,1.191,2.85,2.846,4.857,5.258     c4.172,4.677,9.939,11.917,15.832,22.062c0.729,1.272,1.477,2.579,2.244,3.919c0.701,1.375,1.422,2.785,2.158,4.229     c0.77,1.429,1.424,2.954,2.121,4.5c0.686,1.551,1.445,3.112,2.057,4.774c2.693,6.546,5.131,13.844,6.951,21.852     c1.807,8.002,3.127,16.688,3.533,25.938c0.369,9.241-0.008,19.047-1.662,29.145c-1.682,10.082-4.42,20.488-8.604,30.809     c-4.105,10.352-9.764,20.537-16.756,30.234c-0.84,1.238-1.787,2.398-2.715,3.588c-0.934,1.184-1.873,2.369-2.813,3.561     c-0.996,1.146-1.996,2.295-2.998,3.447l-1.514,1.734l-1.641,1.715c-1.021,1.064-2.047,2.135-3.076,3.205     c-1.055,1.074-2.285,2.172-3.432,3.264c-2.318,2.258-4.744,4.211-7.168,6.277c-4.957,3.955-10.152,7.793-15.752,11.131     c-2.746,1.77-5.664,3.262-8.553,4.867c-1.465,0.756-2.967,1.451-4.459,2.176l-2.248,1.076l-2.301,0.975     c-6.107,2.701-12.521,4.838-19.08,6.664c-1.65,0.418-3.305,0.838-4.963,1.258c-1.668,0.365-3.352,0.691-5.035,1.037     c-1.68,0.371-3.379,0.633-5.086,0.887c-1.707,0.238-3.41,0.576-5.135,0.73c-13.761,1.615-27.992,1.287-42.018-1.234     c-7.018-1.238-13.949-3.104-20.786-5.346c-6.821-2.305-13.437-5.256-19.892-8.539c-6.456-3.303-12.589-7.234-18.471-11.508     c-5.857-4.314-11.343-9.113-16.566-14.172l-1.945-2.041l-1.721-1.826l-0.859-0.912c-0.285-0.301-0.569-0.598-0.888-0.979     l-1.849-2.154l-1.841-2.16c-0.621-0.721-1.229-1.443-1.761-2.162l-3.322-4.328c-4.258-5.891-8.23-12-11.528-18.461     c-3.288-6.455-6.232-13.074-8.547-19.893c-0.641-1.684-1.083-3.432-1.623-5.143l-0.773-2.578     c-0.239-0.863-0.441-1.736-0.663-2.604c-0.42-1.742-0.893-3.467-1.261-5.215c-0.347-1.752-0.694-3.502-1.04-5.25     c-2.562-14.025-2.845-28.266-1.262-42.033c1.686-13.762,5.241-27.072,10.575-39.319l0.974-2.301l1.077-2.25     c0.726-1.494,1.423-2.994,2.169-4.465c1.609-2.887,3.1-5.81,4.872-8.555c3.34-5.604,7.182-10.801,11.14-15.761     c2.063-2.419,4.041-4.873,6.232-7.114c1.08-1.135,2.117-2.299,3.223-3.391c1.117-1.078,2.231-2.152,3.343-3.224l1.773-1.694     l1.666-1.444c1.109-0.961,2.214-1.919,3.316-2.874c1.211-0.959,2.417-1.916,3.62-2.868c1.209-0.945,2.4-1.921,3.633-2.753     c9.703-6.991,19.893-12.652,30.251-16.75c10.326-4.18,20.734-6.922,30.821-8.594c10.1-1.658,19.91-2.021,29.15-1.653     c9.25,0.404,17.938,1.733,25.942,3.54c8.006,1.821,15.307,4.257,21.85,6.956c1.662,0.61,3.227,1.37,4.775,2.056     c1.547,0.698,3.07,1.353,4.5,2.121c1.443,0.736,2.854,1.457,4.229,2.16c1.342,0.767,2.646,1.515,3.92,2.242     c0.637,0.365,1.264,0.726,1.881,1.081c0.609,0.367,1.193,0.762,1.779,1.133c1.17,0.742,2.307,1.465,3.406,2.165     c2.182,1.431,4.148,2.888,6.02,4.182c1.813,1.374,3.457,2.689,4.98,3.87c1.516,1.191,2.797,2.39,3.996,3.4     c2.412,2.009,4.066,3.763,5.258,4.859C514.513,494.625,515.117,495.203,515.117,495.203z M515.117,495.203     c0,0-0.607-0.574-1.787-1.686c-1.201-1.087-2.871-2.824-5.299-4.812c-4.73-4.087-11.945-9.908-22.215-15.526     c-10.215-5.616-23.457-11.238-39.439-14.103c-7.959-1.497-16.574-2.259-25.615-2.13c-9.039,0.11-18.518,1.206-28.104,3.486     c-9.588,2.273-19.254,5.808-28.66,10.516c-9.394,4.75-18.39,10.917-26.729,18.169c-1.081,0.879-2.035,1.833-3.028,2.765     c-0.988,0.938-1.979,1.878-2.975,2.822c-1.01,1.052-2.022,2.106-3.039,3.166l-1.526,1.59l-1.284,1.494     c-0.921,1.067-1.845,2.137-2.771,3.21c-0.912,1.083-1.754,2.232-2.637,3.346c-1.8,2.203-3.376,4.596-5.032,6.933     c-3.143,4.794-6.147,9.735-8.648,14.988c-1.353,2.57-2.422,5.293-3.612,7.958c-0.548,1.354-1.052,2.73-1.583,4.097l-0.786,2.052     l-0.685,2.096c-7.49,22.277-8.925,47.139-3.529,70.743c2.711,11.789,7.021,23.256,12.885,33.912l2.277,3.953     c0.774,1.309,1.638,2.563,2.432,3.861l1.22,1.93l1.316,1.865c0.892,1.234,1.722,2.514,2.657,3.717l2.817,3.602     c0.465,0.623,0.941,1.174,1.42,1.713l1.426,1.646l1.419,1.652c0.214,0.266,0.51,0.568,0.803,0.873l0.868,0.906l1.736,1.811     l0.867,0.906l0.43,0.455l0.215,0.23c-0.025-0.023,0.36,0.375-0.002,0.004c4.359,4.279,8.919,8.354,13.797,12.012     c1.204,0.938,2.482,1.768,3.717,2.656l1.866,1.318l1.929,1.221c1.287,0.811,2.541,1.678,3.853,2.449l3.954,2.275     c10.664,5.852,22.122,10.199,33.918,12.902c23.611,5.426,48.487,3.971,70.776-3.52l2.098-0.686l2.053-0.789     c1.371-0.525,2.736-1.053,4.102-1.578c2.664-1.189,5.389-2.264,7.961-3.619c5.254-2.504,10.197-5.512,14.992-8.658     c2.334-1.654,4.75-3.256,6.877-4.99c1.104-0.873,2.188-1.65,3.305-2.598c1.123-0.973,2.242-1.943,3.355-2.91l1.547-1.344     l1.523-1.459c1.016-0.973,2.029-1.939,3.039-2.906c0.963-1.016,1.922-2.025,2.877-3.033c0.953-1.014,1.932-2.002,2.803-3.074     c7.252-8.346,13.426-17.344,18.164-26.746c4.703-9.41,8.242-19.078,10.504-28.672c2.283-9.59,3.365-19.072,3.477-28.112     c0.129-9.043-0.645-17.656-2.143-25.616c-2.867-15.984-8.5-29.223-14.115-39.438c-5.625-10.266-11.443-17.481-15.531-22.211     c-1.986-2.428-3.727-4.097-4.813-5.298C515.691,495.812,515.117,495.203,515.117,495.203z"
                id="path14"
              />
            </g>
          </g>
        </g>
      </motion.svg>
    </>
  );
}

export default Svg;
