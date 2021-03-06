package ca.mcgill.ecse321.tutoringsystem.model;
import javax.persistence.Id;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
public class StudentReview{
private Integer id;

public void setId(Integer value) {
this.id = value;
}
@Id
public Integer getId() {
return this.id;
}
private String review;

public void setReview(String value) {
this.review = value;
}
public String getReview() {
return this.review;
}
private Student reviewee;

@ManyToOne(optional=false)
public Student getReviewee() {
   return this.reviewee;
}

public void setReviewee(Student reviewee) {
   this.reviewee = reviewee;
}

   private Tutor author;
   
   @ManyToOne(optional=false)
   public Tutor getAuthor() {
      return this.author;
   }
   
   public void setAuthor(Tutor author) {
      this.author = author;
   }
   
   }
