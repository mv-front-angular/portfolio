import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mongoUri = config.mongodb.uri;

// Schemas
const headerSchema = new mongoose.Schema({
  items: [String],
  cvBtn: String,
  cvName: String
}, { collection: 'header' });

const bannerSchema = new mongoose.Schema({
  pretitle: String,
  description: String,
  actionBtn: String
}, { collection: 'banner' });

const aboutMeSchema = new mongoose.Schema({
  title: String,
  paragraphs: [String]
}, { collection: 'aboutMe' });

const experienceSchema = new mongoose.Schema({
  tab: String,
  title: String,
  date: String,
  description: [String]
}, { collection: 'experience' });

const featureProjectsSchema = new mongoose.Schema({
  title: String,
  description: String,
  imgs: [String],
  demoLink: String,
  technologies: [String]
}, { collection: 'featureProjects' });

const contactSchema = new mongoose.Schema({
  pretitle: String,
  title: String,
  content: String,
  btn: String
}, { collection: 'contact' });

// Models
const Header = mongoose.model('Header', headerSchema);
const Banner = mongoose.model('Banner', bannerSchema);
const AboutMe = mongoose.model('AboutMe', aboutMeSchema);
const Experience = mongoose.model('Experience', experienceSchema);
const FeatureProjects = mongoose.model('FeatureProjects', featureProjectsSchema);
const Contact = mongoose.model('Contact', contactSchema);

// Import function
async function importData() {
  try {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Read and import data
    const headerData = JSON.parse(fs.readFileSync(path.join(__dirname, 'header.json'), 'utf-8'));
    const bannerData = JSON.parse(fs.readFileSync(path.join(__dirname, 'banner.json'), 'utf-8'));
    const aboutMeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'aboutMe.json'), 'utf-8'));
    const experienceData = JSON.parse(fs.readFileSync(path.join(__dirname, 'experience.json'), 'utf-8'));
    const featureProjectsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'featureProjects.json'), 'utf-8'));
    const contactData = JSON.parse(fs.readFileSync(path.join(__dirname, 'contact.json'), 'utf-8'));

    // Clear existing data
    await Header.deleteMany({});
    await Banner.deleteMany({});
    await AboutMe.deleteMany({});
    await Experience.deleteMany({});
    await FeatureProjects.deleteMany({});
    await Contact.deleteMany({});

    // Insert new data
    await Header.insertMany(headerData.header);
    await Banner.insertMany(bannerData.banner);
    await AboutMe.insertMany(aboutMeData.aboutMe);
    await Experience.insertMany(experienceData.experience);
    await FeatureProjects.insertMany(featureProjectsData.featureProjects);
    await Contact.insertMany(contactData.contact);

    console.log('Data imported successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
}

importData();