import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  title: String,
  slug: String,
  components: [Schema.Types.Mixed],
  reducers: [String],
  reducerStates: Schema.Types.Mixed
});

export default mongoose.model('Page', schema);