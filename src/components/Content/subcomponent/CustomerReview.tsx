import { Rating, Stack, Typography } from "@mui/material";

export const CustomerReview = ({
  rating,
  name,
  description,
}: {
  rating: number;
  name: string;
  description: string;
}) => {
  return (
    <Stack spacing={1} direction="column">
      
      <Typography variant="body1">{description}</Typography>
      <Typography variant="h6">-{name}</Typography>
      <Rating
        name="half-rating-read"
        value={rating}
        precision={0.5}
        readOnly
      />
      
    </Stack>
  );
};
