import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';

const app = express();
app.use(cors({
  origin: config.cors.origin,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: config.cors.credentials
}));
app.use(express.json());

const mongoUri = config.mongodb.uri;
mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Schemas ---
const headerSchema = new mongoose.Schema({
  items: [String],
  cvBtn: String,
  cvName: String
}, { collection: 'header' });
const Header = mongoose.model('Header', headerSchema);

const bannerSchema = new mongoose.Schema({
  pretitle: String,
  description: String,
  actionBtn: String
}, { collection: 'banner' });
const Banner = mongoose.model('Banner', bannerSchema);

const aboutMeSchema = new mongoose.Schema({
  title: String,
  paragraphs: [String]
}, { collection: 'aboutMe' });
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);

const experienceSchema = new mongoose.Schema({
  tab: String,
  title: String,
  date: String,
  description: [String]
}, { collection: 'experience' });
const Experience = mongoose.model('Experience', experienceSchema);

const featureProjectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgs: [String],
  demoLink: String,
  technologies: [String]
}, { collection: 'featureProjects' });
const FeatureProjects = mongoose.model('FeatureProjects', featureProjectsSchema);

const contactSchema = new mongoose.Schema({
  pretitle: String,
  title: String,
  content: String,
  btn: String
}, { collection: 'contact' });
const Contact = mongoose.model('Contact', contactSchema);

// --- Routes ---
app.get('/api/header', async (req, res) => {
  const data = await Header.find();
  res.json(data);
});

app.get('/api/banner', async (req, res) => {
  const data = await Banner.find();
  res.json(data);
});

app.get('/api/aboutMe', async (req, res) => {
  const data = await AboutMe.find();
  res.json(data);
});

app.get('/api/experience', async (req, res) => {
  const data = await Experience.find();
  res.json(data);
});

app.get('/api/featureProjects', async (req, res) => {
  const data = await FeatureProjects.find();
  res.json(data);
});

app.get('/api/contact', async (req, res) => {
  const data = await Contact.find();
  res.json(data);
});

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${config.env}`);
  console.log(`MongoDB URI: ${config.mongodb.uri}`);
});
