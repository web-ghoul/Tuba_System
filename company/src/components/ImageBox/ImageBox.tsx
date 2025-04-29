import { Box, CircularProgress, Skeleton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ImageBoxTypes } from '../../types/components.types';

const ImageBox = ({
  className,
  lazy,
  src,
  alt,
  children,
  variant,
}: ImageBoxTypes) => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!lazy) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoading(false);
      img.onerror = () => {
        setLoading(false);
        setHasError(true);
      };
      setLoading(true);
    }
  }, [lazy, src]);

  return (
    <Box
      className={`${className} ${
        !lazy && "bg-cover bg-center bg-no-repeat"
      } relative`}
      sx={{
        backgroundImage: `${!lazy && !hasError && `url(${src})`}`,
        "& img":
          variant === "product"
            ? {
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: "8px",
              }
            : {},
      }}
    >
      {lazy && !hasError && (
        <>
          {loading && (
            <>
              {variant === "product" ? (
                <Skeleton
                  className={`!h-[200px] w-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] z-[0]`}
                  variant={"rectangular"}
                />
              ) : variant === "ads" ? (
                <Skeleton
                  className={`!h-[238.32px] w-full absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] z-[0]`}
                  variant={"rectangular"}
                />
              ) : (
                <Box
                  className={`w-full h-full flex justify-center items-center absolute left-[50%] translate-x-[-50%] translate-y-[-50%] top-[50%] z-[0]`}
                >
                  <CircularProgress
                    className={`!w-[40px] !h-[40px] md:w-[35px] md:h-[35px] sm:!w-[30px] sm:!h-[30px]`}
                    sx={{
                      "&>svg": {
                        color: (theme) => theme.palette.primary.main,
                        zIndex: "1000",
                      },
                    }}
                  />
                </Box>
              )}
            </>
          )}
          <LazyLoadImage
            src={src}
            alt={alt}
            className="w-full h-full"
            beforeLoad={() => setLoading(true)}
            afterLoad={() => setLoading(false)}
            onError={() => {
              setLoading(false);
              setHasError(true);
            }}
          />
        </>
      )}
      {hasError && (
        <Typography
          variant="subtitle2"
          className={`text-center !text-zinc-400`}
        >
          حدث خطا فى تحميل الصورة
        </Typography>
      )}
      {children}
    </Box>
  );
};

export default ImageBox;
